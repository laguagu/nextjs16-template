# Next.js 16 Template# Next.js 16 Template# Next.js 16 Template# Next.js 16 Template

A minimal, production-ready Next.js 16 template with best practices.A simple, production-ready Next.js 16 template following best practices.

> **Note:** Includes AI agent configs for **Cursor**, **GitHub Copilot**, **Windsurf**, and **Kodu IDE**.> **Note:** This repository includes AI agent configuration files for **Cursor**, **GitHub Copilot**, **Windsurf**, and **Kodu IDE**.A modern, production-ready Next.js 16 template following best practices and modern standards.A modern, production-ready Next.js 16 template following best practices and modern standards.

## 🚀 Stack## 🚀 Stack

- **Next.js 16** (App Router)- **Next.js 16** (App Router)> **Note:** This repository includes AI agent configuration files for **Cursor**, **GitHub Copilot**, **Windsurf**, and **Kodu IDE** to provide context-aware development assistance.> **Note:** This repository includes AI agent configuration files for Cursor, GitHub Copilot, Windsurf, and Kodu IDE to provide context-aware assistance.

- **React 19.2**

- **TypeScript**- **React 19.2**

- **pnpm**

- **shadcn/ui** + **Tailwind CSS v4**- **TypeScript**

- **Zod** validation

- **pnpm**

## 📁 Structure

- **shadcn/ui** + **Tailwind CSS v4**## 🚀 Tech Stack## 📁 Folder Structure

`````text

app/- **React Hook Form** + **Zod**

├── (authenticated)/       # Protected routes

│   ├── dashboard/- **Drizzle ORM**

│   └── layout.tsx

├── (unauthenticated)/     # Public routes## 📁 Project Structure- **Next.js 16** (App Router)```text

│   ├── sign-in/

│   ├── sign-up/````text- **React 19.2**my-app/

│   └── layout.tsx

├── actions/my-app/

│   └── auth/

│       ├── login-user.ts├── app/- **TypeScript**├── app/

│       └── register-user.ts

├── layout.tsx│   ├── (authenticated)/       # Protected routes

├── page.tsx

└── globals.css│   │   ├── dashboard/- **pnpm** package manager│   ├── (authenticated)/



components/│   │   │   └── page.tsx

├── ui/                    # shadcn/ui

├── header.tsx│   │   └── layout.tsx- **shadcn/ui** + **Tailwind CSS v4** (design tokens in `globals.css`)│   │   ├── dashboard/

└── footer.tsx

│   │

data/                      # Data fetching (use cache)

├── cache-tags.ts│   ├── (unauthenticated)/     # Public routes- **React Hook Form** + **Zod** for forms and validation│   │   │   ├── _components/          # Dashboard-specific components

└── users.ts              # Placeholder

│   │   ├── sign-in/

lib/

├── db/│   │   │   └── page.tsx- **Vercel AI SDK** for AI functionality│   │   │   │   ├── stats-card.tsx

│   ├── index.ts          # Drizzle setup

│   ├── schema.ts         # Placeholder│   │   ├── sign-up/

│   └── queries.ts        # Placeholder

└── utils.ts│   │   │   └── page.tsx- **@/ path alias** for imports│   │   │   │   ├── recent-activity.tsx



proxy.ts                   # Middleware (empty)│   │   ├── page.tsx

drizzle.config.ts

```│   │   └── layout.tsx│   │   │   │   └── quick-actions.tsx



## 🎯 Key Features│   │



### Next.js 16 "use cache"│   ├── actions/## 📁 Project Structure│   │   │   ├── page.tsx



```typescript│   │   └── auth/

// data/users.ts

"use cache";│   │       ├── login-user.ts│   │   │   ├── loading.tsx

import { cacheTag } from "next/cache";

│   │       └── register-user.ts

export async function getUsers() {

  "use cache";│   │```text│   │   │   └── error.tsx

  cacheTag("users");

  // Your data fetching│   ├── layout.tsx

}

```│   ├── page.tsxmy-app/│   │   │



### Server Actions│   ├── loading.tsx



```typescript│   ├── error.tsx├── app/│   │   ├── posts/

// app/actions/auth/login-user.ts

"use server";│   ├── not-found.tsx



import { z } from "zod";│   └── globals.css│   ├── actions/              # Server Actions organized by feature│   │   │   ├── [id]/                 # Dynaaminen reitti



const LoginSchema = z.object({│

  email: z.string().email(),

  password: z.string().min(6),├── components/│   ├── api/                  # API routes│   │   │   │   ├── _components/

});

│   ├── ui/                    # shadcn/ui components

export async function loginUser(prevState, formData) {

  const validated = LoginSchema.safeParse({│   ├── header.tsx│   ├── layout.tsx            # Root layout│   │   │   │   │   ├── post-header.tsx

    email: formData.get("email"),

    password: formData.get("password"),│   └── footer.tsx

  });

  ││   ├── page.tsx              # Home page│   │   │   │   │   ├── post-content.tsx

  if (!validated.success) {

    return { errors: validated.error.flatten().fieldErrors };├── data/                      # Data fetching with "use cache"

  }

  │   ├── cache-tags.ts│   ├── loading.tsx           # Loading UI│   │   │   │   │   └── comment-list.tsx

  // Your auth logic

}│   └── users.ts

`````

││ ├── error.tsx # Error boundary│ │ │ │ ├── edit/

### Route Groups

├── lib/

- `(authenticated)/` - Protected routes

- `(unauthenticated)/` - Public routes│ ├── db/│ ├── not-found.tsx # 404 page│ │ │ │ │ └── page.tsx

### Middleware (Empty)│ │ ├── index.ts # Drizzle client

```typescript│ │   ├── schema.ts          # Database schema│   └── globals.css           # Global styles & Tailwind tokens│   │   │   │   ├── page.tsx

// proxy.ts - Add your logic when needed

export async function middleware() {│   │   └── queries.ts         # Database queries

  return NextResponse.next();

}│   └── utils.ts││   │   │   │   ├── loading.tsx

```

│

## 📦 Getting Started

├── hooks/├── components/│ │ │ │ └── error.tsx

````bash

# Install│   └── use-mobile.ts

pnpm install

││   ├── ui/                   # shadcn/ui components│   │   │   ├── _components/

# Setup environment

cp .env.example .env.local├── proxy.ts                   # Middleware



# Run dev├── drizzle.config.ts          # Drizzle Kit config│   ├── header.tsx            # Global header│   │   │   │   ├── post-card.tsx

pnpm dev

└── .env.local

# Build

pnpm build```│   └── footer.tsx            # Global footer│   │   │   │   └── post-filters.tsx

````

## 💻 Best Practices

## 🎯 Key Features││ │ │ ├── page.tsx

### Components

- Server Components by default

- `"use client"` only when needed

- Direct imports with `@/` alias (no index.ts)### Next.js 16 "use cache" Directive├── data/ # Server-only data fetching layer│ │ │ └── loading.tsx

### Data Fetching

- Use `"use cache"` directive

- Use `cacheTag()` for invalidation```typescript│ ├── cache-tags.ts # Centralized cache tag constants│ │ │

- All queries in `/data` folder

// data/users.ts

### Forms

- Server Actions with `"use server"`"use cache";│ ├── example.ts # Example data fetching with React.cache()│ │ ├── settings/

- Inline Zod validation

- `useActionState` for state

### Database (Optional)import { cacheTag } from "next/cache";│ └── index.ts # Data layer exports│ │ │ ├── \_components/

- Drizzle ORM ready

- Schema in `lib/db/schema.ts`

- Queries in `lib/db/queries.ts`

export async function getUser(id: string) {││ │ │ │ ├── profile-form.tsx

## 🤖 AI Support

"use cache";

Configuration files included:

- `.github/copilot-instructions.md` cacheTag(`user-${id}`);├── lib/│ │ │ │ └── settings-nav.tsx

- `.cursorrules`

- `.windsurfrules`

- `.kodu`

  // Your data fetching logic│ ├── db/ # Database configuration│ │ │ ├── page.tsx

## 📖 Resources

return user;

- [Next.js 16](https://nextjs.org/docs)

- [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache)}│ │ ├── index.ts # DB client setup│ │ │ └── layout.tsx

- [Caching](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)

- [Drizzle ORM](https://orm.drizzle.team)````

## 📄 License│ │ └── schema.ts # Database schema│ │ │

MIT### Server Actions with Inline Validation

│ ├── validations/ # Zod schemas│ │ └── layout.tsx # Auth layout

````typescript

// app/actions/auth/login-user.ts│   │   └── auth.ts           # Auth validation schemas│   │

"use server";

│   └── utils.ts              # Utility functions│   ├── (unauthenticated)/

import { z } from "zod";

││   │   ├── login/

const LoginSchema = z.object({

  email: z.string().email(),├── hooks/│   │   │   ├── _components/

  password: z.string().min(6),

});│   └── use-mobile.ts         # Custom React hooks│   │   │   │   └── login-form.tsx



export async function loginUser(prevState, formData) {││   │   │   └── page.tsx

  const validated = LoginSchema.safeParse({

    email: formData.get("email"),├── types/│   │   │

    password: formData.get("password"),

  });│   └── index.ts              # TypeScript type definitions│   │   ├── register/



  if (!validated.success) {││   │   │   ├── _components/

    return { errors: validated.error.flatten().fieldErrors };

  }├── public/                   # Static assets│   │   │   │   └── register-form.tsx



  // Your auth logic here││   │   │   └── page.tsx

}

```├── proxy.ts                  # Middleware for auth, redirects, etc.│   │   │



### Route Groups├── next.config.ts            # Next.js configuration│   │   └── layout.tsx



- `(authenticated)/` - Protected routes with auth check├── tailwind.config.ts        # Tailwind configuration│   │

- `(unauthenticated)/` - Public routes (sign-in, sign-up)

├── tsconfig.json             # TypeScript configuration│   ├── api/

### Drizzle ORM Setup

├── components.json           # shadcn/ui configuration│   │   └── auth/

```typescript

// lib/db/index.ts├── .env.example              # Environment variables template│   │       └── route.ts

import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";└── .env.local                # Your local environment variables (not committed)│   │



const client = postgres(process.env.DATABASE_URL!);```│   ├── actions/

export const db = drizzle(client);

```│   │   ├── auth/



## 📦 Getting Started## 🎯 Key Principles│   │   │   ├── create-invites.ts



### 1. Install dependencies│   │   │   ├── guest-mode.ts



```bash### Components│   │   │   ├── login-user.ts

pnpm install

```│   │   │   └── register-user.ts



### 2. Set up environment- **Server Components by default** - use `"use client"` only for state/effects/browser APIs│   │   ├── posts/



```bash- Place `"use client"` at **leaves** (smallest possible boundary)│   │   │   ├── create-post.ts

cp .env.example .env.local

```- Route-specific components go in `_components/` folder│   │   │   ├── update-post.ts



Edit `.env.local`:- Global shared components in root `components/` folder│   │   │   └── delete-post.ts



```env- Client component props must be serializable (or Server Actions)│   │   └── users/

DATABASE_URL=postgresql://user:password@localhost:5432/db

```- Pass server content via `children` prop│   │       ├── update-profile.ts



### 3. Run migrations│   │       └── delete-account.ts



```bash### Routing & Pages│   │

pnpm drizzle-kit generate

pnpm drizzle-kit migrate│   ├── layout.tsx

````

- Use route groups: `(authenticated)`, `(unauthenticated)` for layout organization│ ├── page.tsx

### 4. Start dev server

- **Always await params**: `await params` & `await searchParams`│ ├── loading.tsx

```bash

pnpm dev- Provide `error.tsx`, `loading.tsx`, `not-found.tsx` per route│   ├── error.tsx

```

- Enable `typedRoutes: true` in `next.config.ts`│ ├── not-found.tsx

## 💻 Best Practices

- Keep `page.tsx` focused on **composition only** (no logic/styling)│ └── globals.css

### Components

│

- **Server Components by default**

- Use `"use client"` only when needed (state, effects, browser APIs)### Data Fetching & Caching├── components/

- Place `"use client"` at leaves (smallest boundary)

│ ├── ui/ # shadcn/ui

### Data Fetching

- **Explicit caching strategy**:│ │ ├── button.tsx

- Use `"use cache"` directive for automatic caching

- Use `cacheTag()` for cache invalidation - `cache: 'force-cache'` for static data│ │ ├── card.tsx

- All queries in `/data` folder
  - `next: { revalidate: N }` for ISR (Incremental Static Regeneration)│ │ ├── dialog.tsx

### Forms & Actions

- `cache: 'no-store'` for always-fresh data│ │ ├── form.tsx

- Server Actions with `"use server"`

- Inline Zod validation (no separate validation files)- Use `React.cache()` in `/data` modules for request deduplication│ │ ├── input.tsx

- Use `useActionState` for form state

- **Revalidation patterns**:│ │ └── ...

### File Organization

- `revalidateTag(tag, 'max')` for SWR-style revalidation│ ├── header.tsx # Globaalit shared komponentit

- No `index.ts` files (use direct imports with `@/` alias)

- Route-specific components in same folder - `updateTag(tag)` in Server Actions for read-your-writes consistency│ ├── footer.tsx

- Shared components in root `components/`
  - `refresh()` only for uncached data│ └── sidebar.tsx

## 🔧 Scripts

- Client-side: `router.refresh()` for uncached updates│

````bash

pnpm dev          # Start dev server- Mark server-only code: `import 'server-only'`├── data/                              # Server-only data fetching

pnpm build        # Build for production

pnpm start        # Start production server- All database queries through `/data` layer (use parameterized queries)│   ├── users.ts

pnpm lint         # Run ESLint

```│   ├── posts.ts



## 🤖 AI Agent Support### Server Actions & Forms│   ├── cache-tags.ts



This template includes configuration for:│   └── index.ts



- **GitHub Copilot** (`.github/copilot-instructions.md`)- Server Actions: `"use server"`, validate with Zod, then `updateTag()` or `revalidateTag()`│

- **Cursor** (`.cursorrules`)

- **Windsurf** (`.windsurfrules`)- Rich forms: React Hook Form + `zodResolver` for validation├── lib/

- **Kodu** (`.kodu`)

- Return `ActionResult<T>` type for consistent error handling│   ├── db/

## 📖 Learn More

│   │   ├── index.ts

- [Next.js 16 Docs](https://nextjs.org/docs)

- [use cache directive](https://nextjs.org/docs/app/api-reference/directives/use-cache)### Navigation│   │   ├── schema.ts

- [Caching & Revalidating](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)

- [Drizzle ORM](https://orm.drizzle.team)│   │   └── migrations/



## 📄 License- **Server-side**: `redirect()`, `notFound()`, `forbidden()`, `unauthorized()`│   ├── validations/



MIT- **Client-side**: `<Link>` (declarative), `useRouter()` (imperative)│   │   ├── auth.ts


- Loading states: `loading.tsx` + `<Suspense>` for async subtrees│   │   ├── user.ts

│   │   └── post.ts

### State Management│   └── utils.ts

│

- Prefer URL search params for shareable state├── ai/                                # AI SDK (juuressa!)

- Minimize client state; favor Server Components/Actions│   ├── client.ts

- Use `startTransition` for non-blocking updates│   └── prompts.ts

│

### Security├── hooks/

│   └── use-mobile.ts

- Only `NEXT_PUBLIC_*` environment variables are exposed to client│

- Always verify auth in handlers/actions (never trust client)├── types/

- Use middleware (`proxy.ts`) for authentication checks│   ├── index.ts

│   └── database.ts

## 💻 Code Style│

├── public/

- Functions **< 60 lines**, single responsibility│   ├── images/

- **Naming conventions**:│   ├── fonts/

  - `PascalCase`: components, types│   └── favicon.ico

  - `camelCase`: functions, variables│

  - `kebab-case`: file names├── proxy.ts                           # Next.js 16 middleware

- **Fail fast**: explicit errors, guard clauses, early returns├── next.config.ts

- **Minimal text in UI**, prefer visual hierarchy├── tailwind.config.ts

- Derive types from Zod schemas or database types├── tsconfig.json

- **Never use `any`** - use `unknown` for truly unknown types├── components.json

├── package.json

## 📦 Getting Started├── pnpm-lock.yaml

├── .env.local

### 1. Clone the repository├── .env.example

└── .gitignore

```bash```

git clone <your-repo-url>

cd nextjs16-template## 🎯 Keskeiset periaatteet

````

### Stack

### 2. Install dependencies

- **Next.js 16** (App Router)

````bash- **React 19.2**

pnpm install- **pnpm** package manager

```- **shadcn/ui + Tailwind v4** (tokens `globals.css`:ssä)

- **React Hook Form + Zod** validointiin

### 3. Set up environment variables- **Vercel AI SDK** AI-toiminnallisuuksiin

- **@/ alias** importeille

```bash

cp .env.example .env.local### Komponentit

````

- **Server Components oletuksena**

Edit `.env.local` with your actual values.- `"use client"` vain state/effects/browser API:lle

- Sijoita `"use client"` lehtiin (pienin mahdollinen rajapinta)

### 4. Run the development server- Reitti-spesifit komponentit `_components/` -kansioon

- Globaalit shared komponentit `components/` juureen

```bash

pnpm dev### Routing

```

- Route groupit: `(authenticated)` ja `(unauthenticated)`

Open [http://localhost:3000](http://localhost:3000) in your browser.- Nested layoutit `layout.tsx`:n kautta

- **Async params**: Aina `await params` & `await searchParams`

## 📚 Examples- Jokaisessa routessa: `error.tsx`, `loading.tsx`, `not-found.tsx`

- Ota käyttöön `typedRoutes: true` `next.config.ts`:ssä

### Server Component with Data Fetching

### Data & Caching

```typescript

// app/users/page.tsx- **Eksplisiittinen caching**:

import { getUsers } from "@/data/example";  - `cache: 'force-cache'` (staattinen)

  - `next: { revalidate: N }` (ISR)

export default async function UsersPage() {  - `cache: 'no-store'` (aina tuore)

  const users = await getUsers();- Deduplikointi: `React.cache()` `/data` -moduuleissa

- **Revalidation**:

  return (  - `revalidateTag(tag, 'max')` SWR:lle

    <div className="container mx-auto py-8">  - `updateTag(tag)` Server Actioneissa read-your-writes:lle

      <h1 className="text-3xl font-bold mb-6">Users</h1>  - `refresh()` vain cachettamattomalle datalle

      <ul className="space-y-2">- Merkitse server-only: `import 'server-only'`

        {users.map((user) => (- Kaikki DB-kyselyt `/data`:n kautta

          <li key={user.id} className="p-4 border rounded">- Request API:t: `await cookies()`, `await headers()`, `await draftMode()`

            {user.name} - {user.email}

          </li>### Actions & Forms

        ))}

      </ul>- Server Actions: `"use server"`, validoi Zod:lla, sitten `updateTag()` tai `revalidateTag()`

    </div>- Rich-lomakkeet: React Hook Form + `zodResolver`

  );

}### Navigointi

```

- **Server**: `redirect()`, `notFound()`, `forbidden()`, `unauthorized()`

### Server Action with Validation- **Client**: `<Link>` (deklaratiivinen), `useRouter()` (imperatiivinen)

````typescript### Security

// app/actions/users/update-profile.ts

"use server";- Vain `NEXT_PUBLIC_*` näkyy clientille

- Auth-tarkistukset aina handlereissa/actioneissa

import { revalidateTag } from "next/cache";

import { z } from "zod";## 📝 Code Style

import { CACHE_TAGS } from "@/data/cache-tags";

- Funktiot <60 riviä, single responsibility

const updateProfileSchema = z.object({- **Nimeäminen**:

  name: z.string().min(2),  - PascalCase: komponentit/tyypit

  email: z.string().email(),  - camelCase: funktiot/muuttujat

});  - kebab-case: tiedostot

- Fail fast: eksplisiittiset virheet, guard clauset, early returns

export async function updateProfile(userId: string, formData: FormData) {- Ei `any` - käytä `unknown` todella tuntemattomille tyypeille

  // Validate input

  const data = updateProfileSchema.parse({## 📚 Esimerkkejä

    name: formData.get("name"),

    email: formData.get("email"),### 1. Dynaaminen reitti + async params

  });

```typescript

  // Update in database (example)// app/(authenticated)/posts/[id]/page.tsx

  // await db.users.update({ where: { id: userId }, data });import { notFound } from "next/navigation";

import { getPost } from "@/data/posts";

  // Revalidate cacheimport { PostHeader } from "./_components/post-header";

  revalidateTag(CACHE_TAGS.user(userId));import { PostContent } from "./_components/post-content";

  revalidateTag(CACHE_TAGS.users);import { CommentList } from "./_components/comment-list";



  return { success: true };export default async function PostPage({

}  params,

```}: {

  params: Promise<{ id: string }>;

### Client Component with Form}) {

  const { id } = await params;

```typescript  const post = await getPost(id);

// app/profile/_components/profile-form.tsx

"use client";  if (!post) {

    notFound();

import { useForm } from "react-hook-form";  }

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";  return (

import { Button } from "@/components/ui/button";    <div className="container mx-auto py-8">

import { Input } from "@/components/ui/input";      <PostHeader post={post} />

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";      <PostContent content={post.content} />

import { updateProfile } from "@/app/actions/users/update-profile";      <CommentList postId={id} />

    </div>

const formSchema = z.object({  );

  name: z.string().min(2),}

  email: z.string().email(),```

});

### 2. Server Action autentikaatiolla

export function ProfileForm({ userId, initialData }) {

  const form = useForm({```typescript

    resolver: zodResolver(formSchema),// app/actions/auth/login-user.ts

    defaultValues: initialData,"use server";

  });

import { cookies } from "next/headers";

  async function onSubmit(data) {import { redirect } from "next/navigation";

    const formData = new FormData();import { loginSchema } from "@/lib/validations/auth";

    formData.append("name", data.name);import { db } from "@/lib/db";

    formData.append("email", data.email);

    export async function loginUser(formData: FormData) {

    await updateProfile(userId, formData);  // Validoi Zod:lla

  }  const validated = loginSchema.parse({

    email: formData.get("email"),

  return (    password: formData.get("password"),

    <Form {...form}>  });

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        <FormField  // Hae käyttäjä

          control={form.control}  const user = await db.query.users.findFirst({

          name="name"    where: (users, { eq }) => eq(users.email, validated.email),

          render={({ field }) => (  });

            <FormItem>

              <FormLabel>Name</FormLabel>  if (!user) {

              <FormControl>    return { error: "Väärä sähköposti tai salasana" };

                <Input {...field} />  }

              </FormControl>

              <FormMessage />  // Aseta session cookie

            </FormItem>  const cookieStore = await cookies();

          )}  cookieStore.set("session", user.sessionToken, {

        />    httpOnly: true,

            secure: process.env.NODE_ENV === "production",

        <FormField    sameSite: "lax",

          control={form.control}    maxAge: 60 * 60 * 24 * 7, // 7 päivää

          name="email"  });

          render={({ field }) => (

            <FormItem>  redirect("/dashboard");

              <FormLabel>Email</FormLabel>}

              <FormControl>```

                <Input type="email" {...field} />

              </FormControl>### 3. Data layer React.cache():lla

              <FormMessage />

            </FormItem>```typescript

          )}// data/posts.ts

        />import "server-only";

import { cache } from "react";

        <Button type="submit" disabled={form.formState.isSubmitting}>import { db } from "@/lib/db";

          {form.formState.isSubmitting ? "Saving..." : "Save Changes"}import { CACHE_TAGS } from "@/data/cache-tags";

        </Button>

      </form>export const getPost = cache(async (id: string) => {

    </Form>  return db.query.posts.findFirst({

  );    where: (posts, { eq }) => eq(posts.id, id),

}    cache: "force-cache",

```    next: {

      tags: [CACHE_TAGS.posts, CACHE_TAGS.post(id)],

### Data Layer with Caching      revalidate: 3600, // 1 tunti

    },

```typescript  });

// data/users.ts});

import "server-only";

import { cache } from "react";export const getPosts = cache(async () => {

import { CACHE_TAGS } from "./cache-tags";  return db.query.posts.findMany({

    cache: "force-cache",

export const getUser = cache(async (id: string) => {    next: {

  // Example with cache configuration      tags: [CACHE_TAGS.posts],

  // const user = await db.query.users.findFirst({      revalidate: 600, // 10 minuuttia

  //   where: (users, { eq }) => eq(users.id, id),    },

  //   cache: 'force-cache',  });

  //   next: {});

  //     tags: [CACHE_TAGS.users, CACHE_TAGS.user(id)],```

  //     revalidate: 3600, // 1 hour

  //   },### 4. Cache tags keskitetysti

  // });

  ```typescript

  return { id, name: "John Doe", email: "john@example.com" };// data/cache-tags.ts

});export const CACHE_TAGS = {

```  users: "users",

  user: (id: string) => `user-${id}`,

### Middleware (Authentication Example)  posts: "posts",

  post: (id: string) => `post-${id}`,

```typescript  comments: "comments",

// proxy.ts  comment: (id: string) => `comment-${id}`,

import { NextResponse } from "next/server";} as const;

import type { NextRequest } from "next/server";```



export async function middleware(request: NextRequest) {### 5. Server Action cache updatella

  const session = request.cookies.get("session");

  const { pathname } = request.nextUrl;```typescript

// app/actions/posts/update-post.ts

  const isProtectedRoute = pathname.startsWith("/dashboard");"use server";

  const isAuthPage = pathname.startsWith("/login");

import { updateTag } from "next/cache";

  // Redirect to login if accessing protected route without sessionimport { postSchema } from "@/lib/validations/post";

  if (isProtectedRoute && !session) {import { db } from "@/lib/db";

    return NextResponse.redirect(new URL("/login", request.url));import { CACHE_TAGS } from "@/data/cache-tags";

  }

export async function updatePost(id: string, formData: FormData) {

  // Redirect to dashboard if accessing auth page with session  const validated = postSchema.parse({

  if (isAuthPage && session) {    title: formData.get("title"),

    return NextResponse.redirect(new URL("/dashboard", request.url));    content: formData.get("content"),

  }  });



  return NextResponse.next();  const post = await db.posts.update({

}    where: { id },

    data: validated,

export const config = {  });

  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],

};  // Read-your-writes: päivitä välittömästi

```  updateTag(CACHE_TAGS.post(id));

  updateTag(CACHE_TAGS.posts);

## 🔧 Configuration

  return { success: true, post };

### next.config.ts}

````

````typescript

import type { NextConfig } from "next";### 6. Client komponentti hookilla



const config: NextConfig = {```typescript

  typescript: {// app/(authenticated)/dashboard/_components/stats-card.tsx

    typedRoutes: true, // Enable type-safe routing"use client";

  },

  images: {import { Card } from "@/components/ui/card";

    remotePatterns: [import { useMobile } from "@/hooks/use-mobile";

      {

        protocol: "https",interface StatsCardProps {

        hostname: "**.example.com",  title: string;

      },  value: string | number;

    ],  change?: number;

  },}

};

export function StatsCard({ title, value, change }: StatsCardProps) {

export default config;  const isMobile = useMobile();

````

return (

### Environment Variables <Card className={isMobile ? "p-4" : "p-6"}>

      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>

See `.env.example` for required environment variables. <p className="text-3xl font-bold mt-2">{value}</p>

      {change && (

## 🤖 AI Agent Support <p className={change > 0 ? "text-green-600" : "text-red-600"}>

          {change > 0 ? "+" : ""}

This template includes configuration files for popular AI coding assistants: {change}%

        </p>

- **`.github/copilot-instructions.md`** - GitHub Copilot context )}

- **`.cursorrules`** - Cursor IDE rules </Card>

- **`.windsurfrules`** - Windsurf IDE rules );

- **`.kodu`** - Kodu IDE configuration}

````

These files help AI assistants understand your project structure, coding standards, and best practices to provide better suggestions.

### 7. Proxy.ts (Middleware)

## 📖 Learn More

```typescript

- [Next.js 16 Documentation](https://nextjs.org/docs)// proxy.ts

- [React 19 Documentation](https://react.dev)import { NextResponse } from "next/server";

- [shadcn/ui Components](https://ui.shadcn.com)import type { NextRequest } from "next/server";

- [Tailwind CSS v4](https://tailwindcss.com)

- [Vercel AI SDK](https://sdk.vercel.ai)export async function middleware(request: NextRequest) {

  const session = request.cookies.get("session");

## 📄 License  const { pathname } = request.nextUrl;



MIT  const isAuthPage =

    pathname.startsWith("/login") || pathname.startsWith("/register");

---  const isProtected =

    pathname.startsWith("/dashboard") ||

**Built with ❤️ using Next.js 16**    pathname.startsWith("/settings") ||

    pathname.startsWith("/posts");

  // Ohjaa kirjautumissivulle jos ei sessiota
  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Ohjaa dashboardiin jos jo kirjautunut
  if (isAuthPage && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
````

### 8. Zod validointi

```typescript
// lib/validations/auth.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Virheellinen sähköpostiosoite"),
  password: z.string().min(8, "Salasanan tulee olla vähintään 8 merkkiä"),
});

export const registerSchema = loginSchema
  .extend({
    name: z.string().min(2, "Nimen tulee olla vähintään 2 merkkiä"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Salasanat eivät täsmää",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
```

### 9. AI client setup

```typescript
// ai/client.ts
import OpenAI from "openai";
import { z } from "zod";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Esimerkki strukturoidusta outputista
export async function generateSummary(text: string) {
  const summarySchema = z.object({
    summary: z.string(),
    keyPoints: z.array(z.string()),
    sentiment: z.enum(["positive", "neutral", "negative"]),
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that summarizes text.",
      },
      {
        role: "user",
        content: `Summarize this text: ${text}`,
      },
    ],
    response_format: { type: "json_object" },
  });

  const parsed = summarySchema.parse(
    JSON.parse(response.choices[0].message.content || "{}"),
  );

  return parsed;
}
```

### 10. Form React Hook Form:lla

```typescript
// app/(unauthenticated)/login/_components/login-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { loginUser } from "@/app/actions/auth/login-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginInput) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await loginUser(formData);

    if (result?.error) {
      form.setError("root", { message: result.error });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sähköposti</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="etunimi@esimerkki.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salasana</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <p className="text-sm text-red-600">
            {form.formState.errors.root.message}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Kirjaudutaan..." : "Kirjaudu"}
        </Button>
      </form>
    </Form>
  );
}
```

## 🚀 Aloitus

1. **Kloonaa template**

   ```bash
   git clone <repo-url>
   cd my-app
   ```

2. **Asenna riippuvuudet**

   ```bash
   pnpm install
   ```

3. **Kopioi ympäristömuuttujat**

   ```bash
   cp .env.example .env.local
   ```

4. **Käynnistä dev-serveri**
   ```bash
   pnpm dev
   ```

## 📦 Paketit

Suositellut paketit `package.json`:iin:

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.53.0",
    "@hookform/resolvers": "^3.9.1",
    "zod": "^3.23.8",
    "@radix-ui/react-*": "latest",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5",
    "openai": "^4.70.4",
    "drizzle-orm": "^0.38.3"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.6",
    "@types/react-dom": "^19.0.2",
    "drizzle-kit": "^0.30.0",
    "eslint": "^9.17.0",
    "eslint-config-next": "^16.0.0"
  }
}
```

## 🔧 Konfiguraatio

### next.config.ts

```typescript
import type { NextConfig } from "next";

const config: NextConfig = {
  typescript: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
  },
};

export default config;
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 📄 Lisenssi

MIT

---

**Huom:** Tämä on template-rakenne. Muokkaa ja sovella projektin tarpeiden mukaan!
