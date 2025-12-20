Tech: Next.js 16 App Router, React 19.3, pnpm
UI: shadcn/ui + Tailwind v4
Forms: React Hook Form + Zod
AI: Structured output with Zod schema

Imports: @/ alias
Routes: app/(route)/components/, app/(route)/lib/
AI logic: /ai
Shared: components/, /lib, /data etc.

page.tsx: flat composition only (<Header/><Content/><Footer/>), no logic/styling
