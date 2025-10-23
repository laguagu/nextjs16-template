# Next.js 16 Standards

## Stack

- Next.js 16 (App Router), React 19.2, pnpm
- shadcn/ui + Tailwind v4 (tokens in `globals.css`)
- React Hook Form + Zod, Vercel AI SDK
- Imports: `@/` alias
- AI: OpenAI structured output via `client.responses.parse` or `generateObject()`

## Components

- **Server Components default**; `"use client"` only for state/effects/browser APIs
- Place `"use client"` at leaves (smallest boundary)
- Client props: serializable data or Server Actions (no functions/classes)
- Pass server content via `children`
- `page.tsx`: composition only (no logic/styling)
- Route components → `app/(route)/_components/`
- Shared → `components/`, `/lib`, `/data`

## Routing

- Nested layouts for persistent UI
- Metadata: `metadata` object or `generateMetadata()`
- **Async params**: Always `await params` & `await searchParams`
- Provide `error.tsx`, `loading.tsx`, `not-found.tsx` per route
- Enable `typedRoutes: true` in `next.config.js`

## Data & Caching

- **"use cache"**: Prefer function-level caching with `"use cache"` directive
- **Explicit caching**:
  - `cache: 'force-cache'` (static)
  - `next: { revalidate: N }` (ISR)
  - `cache: 'no-store'` (always fresh)
- **Revalidation**:
  - `revalidateTag(tag, 'max')` for SWR
  - `updateTag(tag)` in Server Actions for read-your-writes
  - `router.refresh()` for uncached client updates
- Mark server-only: `import 'server-only'`
- All DB queries via `/data` (parameterized queries only)
- Request APIs: `await cookies()`, `await headers()`, `await draftMode()`
- Use `after()` for post-response work (logging, analytics)

## Actions & Forms

- Server Actions: `"use server"`, validate with Zod, then `updateTag()` or `revalidateTag()`
- Rich forms: React Hook Form + `zodResolver`

## Navigation

- **Server**: `redirect()`, `notFound()`, `forbidden()`, `unauthorized()`
- **Client**: `<Link>` (declarative), `useRouter()` (imperative)
- Loading states: `loading.tsx` + `<Suspense>` for async subtrees
- Critical images: `<Image priority sizes="...">`

## State

- Prefer URL search params for shareable state (`useSearchParams` / `searchParams`)
- Minimize client state; favor Server Components/Actions
- `startTransition` for non-blocking updates

## Security

- Only `NEXT_PUBLIC_*` exposed to client
- Auth checks in handlers/actions (never trust client)

## Code Style

- Functions <60 lines, single responsibility
- **Naming**: PascalCase (components/types), camelCase (functions/vars), kebab-case (files)
- Fail fast with explicit errors, guard clauses, early returns
- UI: context over labels (minimal text)
- Types from Zod schemas or DB types

## Error Handling

- User-friendly error messages
- Toast notifications for feedback
- Provide `error.tsx` boundaries per route
