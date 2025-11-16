# Next.js 16 Template

A modern, production-ready Next.js 16 starter template with best practices baked in.

> **Note:** Includes AI agent configs for Cursor, GitHub Copilot, Windsurf, and Kodu IDE.

## 🚀 Tech Stack

- **Next.js 16.0.3** - App Router, Turbopack
- **React 19.2** - Server Components, React Compiler
- **TypeScript 5.9** - Strict mode
- **Tailwind CSS 4.1** - CSS variables in `globals.css`
- **shadcn/ui** - 40+ pre-installed components
- **React Hook Form + Zod** - Form handling & validation
- **Drizzle ORM** - Database toolkit (configured, not connected)
- **pnpm** - Fast package manager
- **Lucide Icons** - Icon library
- **Next Themes** - Dark mode support
- **Sonner** - Toast notifications
- **Recharts** - Data visualization

## 📁 Project Structure

```
nextjs16-template/
├── app/
│   ├── (authenticated)/          # Protected routes
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard with metric cards
│   │   └── layout.tsx            # Auth layout with header
│   ├── (unauthenticated)/        # Public routes
│   │   ├── page.tsx              # Welcome page
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── actions/                  # Server Actions
│   │   └── auth/
│   │       ├── login-user.ts     # With Zod validation
│   │       └── register-user.ts
│   ├── api/                      # API routes (empty)
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── globals.css               # Global styles + tokens
├── components/
│   ├── ui/                       # shadcn/ui components (40+)
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── data/                         # Server-only data layer
│   ├── cache-tags.ts             # Centralized cache tags
│   └── users.ts                  # Example with docs
├── lib/
│   ├── db/
│   │   ├── index.ts              # Drizzle client setup
│   │   ├── schema.ts             # Schema examples
│   │   └── queries.ts
│   └── utils.ts                  # cn() helper
├── hooks/
│   └── use-mobile.ts
├── ai/                           # AI SDK placeholder
├── public/                       # Static assets
├── .github/
│   └── copilot-instructions.md   # AI context
├── .cursorrules                  # Cursor IDE config
├── .windsurfrules                # Windsurf IDE config
├── .kodu/                        # Kodu IDE config
├── proxy.ts                      # Middleware (empty with examples)
├── next.config.ts                # React Compiler enabled
├── tailwind.config.ts
├── tsconfig.json                 # @/* alias configured
├── components.json               # shadcn/ui config
├── drizzle.config.ts
├── .env.example
└── package.json
```

## 🎯 What's Included

### ✅ Implemented
- Route groups: `(authenticated)` and `(unauthenticated)`
- Basic dashboard with metric cards
- Server Actions with Zod validation (login/register stubs)
- shadcn/ui component library (fully integrated)
- Data layer pattern with cache tags
- TypeScript strict mode
- Tailwind CSS with design tokens
- AI agent configuration files
- React 19 features (Server Components, React Compiler)

### 📝 Boilerplate/Empty
- Database schema (examples only)
- Authentication logic (validation only, no real auth)
- API routes
- Drizzle ORM connection (configured but unused)
- Middleware auth checks
- AI SDK directory

## 📦 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/db
AUTH_SECRET=your-secret-key
OPENAI_API_KEY=sk-...
```

### 3. Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. (Optional) Set up database

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

## 🔧 Available Scripts

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production with Turbopack
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
```

## 💡 Key Concepts

### Components
- **Server Components by default** - Use `"use client"` only when needed
- Place `"use client"` at leaves (smallest boundary)
- Route-specific components in `_components/` folder
- Shared components in root `components/`

### Data Fetching
- Use `"use cache"` directive for caching
- Use `cacheTag()` for cache invalidation
- All queries in `/data` folder
- Mark server-only code: `import "server-only"`

### Server Actions
- Add `"use server"` directive
- Validate with Zod inline
- Use `useActionState` for form state
- Return consistent result types

### Routing
- Route groups for layout organization
- Always `await params` and `await searchParams`
- Provide `error.tsx`, `loading.tsx`, `not-found.tsx`

### File Organization
- No `index.ts` files - use direct imports with `@/`
- Keep `page.tsx` focused on composition
- Server Components > Client Components

## 🗂️ Directory Guide

| Directory | Purpose |
|-----------|---------|
| `app/` | Pages, layouts, and routing |
| `app/actions/` | Server Actions organized by feature |
| `components/ui/` | shadcn/ui components |
| `components/layout/` | Shared layout components |
| `data/` | Server-only data fetching with caching |
| `lib/db/` | Database client and schema |
| `lib/validations/` | Zod schemas (create as needed) |
| `hooks/` | Custom React hooks |
| `types/` | TypeScript type definitions (create as needed) |
| `public/` | Static assets |
| `ai/` | AI SDK utilities (if using) |

## 🎨 Styling

Tailwind CSS 4 with CSS variables in `globals.css`:
- Design tokens as CSS variables
- Dark mode support via `next-themes`
- `cn()` utility for class merging
- shadcn/ui components use `data-slot` attributes

## 🔐 Security Best Practices

- Only `NEXT_PUBLIC_*` env vars are exposed to client
- Always verify auth in Server Actions/API routes
- Use middleware (`proxy.ts`) for route protection
- Never use `any` - use `unknown` for truly unknown types

## 📚 Next Steps

1. **Add authentication** - Implement actual auth logic in Server Actions
2. **Connect database** - Update `DATABASE_URL` and run migrations
3. **Build features** - Start adding your app-specific functionality
4. **Configure middleware** - Add auth checks in `proxy.ts`
5. **Customize theme** - Edit CSS variables in `globals.css`
6. **Add validations** - Create Zod schemas in `lib/validations/`

## 🤖 AI Agent Support

This template includes configuration files for AI coding assistants:

- `.github/copilot-instructions.md` - GitHub Copilot
- `.cursorrules` - Cursor IDE
- `.windsurfrules` - Windsurf IDE
- `.kodu/` - Kodu IDE

These files provide context about project structure and coding standards.

## 📖 Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [Zod](https://zod.dev)

## 📄 License

MIT

---

**Happy coding!** 🚀
