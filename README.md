# Next.js 16 Template

## Getting Started

This is a **template** — review and remove what you don't need:

| If you don't need...       | Delete                              |
| -------------------------- | ----------------------------------- |
| Example route group        | `app/(marketing)/`                  |
| Example Server Actions     | `app/actions/`                      |
| Request interception       | `proxy.ts`                          |
| Database                   | `lib/db/`, `data/`, `drizzle.config.ts` |
| AI features                | `ai/`                               |

After cleanup:

1. Copy `.env.example` to `.env.local` and fill in values
2. Run `pnpm install && pnpm dev`

---

# Standards

## Stack

- Next.js 16 (App Router), React 19.3, pnpm
- shadcn/ui + Tailwind v4 (tokens in `globals.css`)
- React Hook Form + Zod, Vercel AI SDK
- Imports: `@/` alias
- AI: OpenAI structured output via `client.responses.parse` or `generateObject()`

## Components

- `"use client"` only for state/effects/browser APIs; place at leaves (smallest boundary)
- Client props: serializable data or Server Actions (no functions/classes)
- Pass server content via `children`
- `page.tsx`: flat composition only (no logic/styling/deep nesting or boilerplate wrappers)
- Keep components lean: drop unused wrappers, skip duplicating shared layout UI, and render only what the segment actually needs
- Accept `className` prop and merge with `cn()` for style overrides
- Route components → `app/(route)/components/` (organize into subfolders if many)
- Route-specific types/utils → `app/(route)/lib/`
- AI logic → `/ai`
- Shared → `components/`, `/lib`, `/data`

## Routing

- Nested layouts with route groups like `(auth)` (folders in parentheses) to organize features without adding URL segments
- When sharing chrome across segments, add segment-specific `layout.tsx` files so each parent layout wraps its child layouts once instead of duplicating markup
- Async params: Always `await params` & `await searchParams`
- Define `error.tsx`, `global-error.tsx`, `loading.tsx`, `not-found.tsx` only for segments that need custom UX; otherwise inherit from the nearest parent
- Use Proxy API (`proxy.ts`) for request interception; replaces middleware pattern in Next.js 16

## Data & Caching

- `"use cache"`: Prefer function-level caching with `"use cache"` directive
- Explicit caching:
  - `cache: 'force-cache'` (static)
  - `next: { revalidate: N }` (ISR)
  - `cache: 'no-store'` (always fresh)
- Revalidation:
  - `revalidateTag(tag, 'max')` for SWR
  - `updateTag(tag)` in Server Actions for read-your-writes
  - `refresh()` from `next/cache` in Server Actions to refresh uncached data; `router.refresh()` (client-side) for full refresh
- Mark server-only: `import 'server-only'`
- All DB queries via `/data` (parameterized queries only)
- Request APIs: `await cookies()`, `await headers()`, `await draftMode()`

## Actions & Forms

- Server Actions: `"use server"`, validate with Zod, then `updateTag()` or `revalidateTag()`

### Example: Auth Server Action

```typescript
// app/actions/auth/login-user.ts
"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type State = {
  errors?: { email?: string[]; password?: string[] };
  message?: string;
};

export async function loginUser(
  prevState: State | undefined,
  formData: FormData
): Promise<State> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // Your auth logic here...
  redirect("/dashboard");
}
```

```tsx
// Client component using the action
"use client";

import { loginUser } from "@/app/actions/auth/login-user";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "..." : "Sign in"}</button>;
}

export default function LoginForm() {
  const [state, formAction] = useActionState(loginUser, undefined);

  return (
    <form action={formAction}>
      <input name="email" type="email" />
      {state?.errors?.email && <p>{state.errors.email[0]}</p>}
      <input name="password" type="password" />
      {state?.errors?.password && <p>{state.errors.password[0]}</p>}
      {state?.message && <p>{state.message}</p>}
      <SubmitButton />
    </form>
  );
}
```

## Navigation

- Server: `redirect()`, `notFound()`, `forbidden()`, `unauthorized()`
- Client: `<Link>` (declarative), `useRouter()` (imperative)
- Loading states: `loading.tsx` + `<Suspense>` for async subtrees
- Use `<Suspense>` to stream slow sections: fetch in Server Components (fetch/ORM) or pass promises to client leaves and resolve them with `use()` while fallbacks render.

## State

- Prioritize SSR: minimize `useState`, favor Server Components/Actions and URL params for shareable state
- Client components: wrap non-urgent UI updates with `useTransition`; use `isPending` for feedback (disable buttons, show spinners). Keeps urgent interactions smooth and prevents unwanted Suspense fallbacks
- Don't wrap controlled input state in transitions; after `await` inside transition, wrap subsequent `setState` in another `startTransition`

## Security

- Prefer Data Access Layer (DAL) to isolate sensitive data operations in server-only modules
- Auth checks in handlers/actions (never trust client)

## Code Style

- Functions <60 lines, single responsibility
- Fail fast with explicit errors, guard clauses, early returns
- UI: context over labels (minimal text)
- Types from Zod schemas or DB types

## Error Handling

- Extract repeated validation (Zod schemas) and error responses into reusable functions
- Toast notifications for feedback
