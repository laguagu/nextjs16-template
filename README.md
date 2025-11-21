# Next.js 16 Template

Template application to start working from. Pre-configured with best practices.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, pnpm
- shadcn/ui + Tailwind v4 (tokens in `globals.css`)
- React Hook Form + Zod, Drizzle ORM
- Imports: `@/` alias
- AI: Vercel AI SDK placeholder

```bash
pnpm install && pnpm dev
```

## Components

- `"use client"` only for state/effects/browser APIs; place at leaves (smallest boundary)
- Client props: serializable data or Server Actions (no functions/classes)
- Pass server content via `children`
- `page.tsx`: flat composition only (no logic/styling/deep nesting)
- Keep components lean: drop unused wrappers, render only what the segment needs
- Accept `className` prop and merge with `cn()`
- Route components → `app/(route)/_components/`
- Route-specific types/utils → `app/(route)/lib/`
- AI logic → `/ai`
- Shared → `components/`, `/lib`, `/data`

## Routing

- Nested layouts with route groups like `(auth)` to organize features without adding URL segments
- **Async params**: Always `await params` & `await searchParams`
- Define `error.tsx`, `loading.tsx`, `not-found.tsx` only for segments that need custom UX
- Use Proxy API (`proxy.ts`) for request interception

## Data & Caching

- **"use cache"**: Prefer function-level caching with `"use cache"` directive
- **Explicit caching**:
  - `cache: 'force-cache'` (static)
  - `next: { revalidate: N }` (ISR)
  - `cache: 'no-store'` (always fresh)
- **Revalidation**:
  - `revalidateTag(tag, 'max')` for SWR
  - `updateTag(tag)` in Server Actions for read-your-writes
- Mark server-only: `import 'server-only'`
- All DB queries via `/data` (parameterized queries only)
- Request APIs: `await cookies()`, `await headers()`, `await draftMode()`

## Actions & Forms

- Server Actions: `"use server"`, validate with Zod, then `updateTag()` or `revalidateTag()`

## Navigation

- **Server**: `redirect()`, `notFound()`, `forbidden()`, `unauthorized()`
- **Client**: `<Link>` (declarative), `useRouter()` (imperative)
- Loading states: `loading.tsx` + `<Suspense>` for async subtrees

## State

- Prioritize SSR: minimize `useState`, favor Server Components/Actions and URL params for shareable state
- Client components: wrap non-urgent UI updates with `useTransition`
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
