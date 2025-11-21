# Next.js 16 Template

Template-sovellus, josta voit aloittaa työskentelyn. Sisältää parhaita käytäntöjä valmiiksi konfiguroituna.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, pnpm
- shadcn/ui + Tailwind v4 (tokens `globals.css`:ssä)
- React Hook Form + Zod, Drizzle ORM
- Imports: `@/` alias
- AI: Vercel AI SDK placeholder

```bash
pnpm install && pnpm dev
```

## Components

- `"use client"` vain tilalle/efekteille/browser API:lle; sijoita lehtiin (pienin rajaus)
- Client props: serialisoitava data tai Server Actions (ei funktioita/luokkia)
- Välitä server-sisältö `children`-propilla
- `page.tsx`: tasainen compositio (ei logiikkaa/stylejä/syvää nestingiä)
- Pidä komponentit kevyinä: poista käyttämättömät wrapperit, renderöi vain segmentin tarpeelliset
- Hyväksy `className`-prop ja merge `cn()`:llä
- Route-komponentit → `app/(route)/_components/`
- Route-spesifit tyypit/utilit → `app/(route)/lib/`
- AI-logiikka → `/ai`
- Shared → `components/`, `/lib`, `/data`

## Routing

- Nested layoutit route groupeilla kuten `(auth)` organisoimaan featureseja ilman URL-segmenttejä
- **Async params**: Aina `await params` & `await searchParams`
- Määrittele `error.tsx`, `loading.tsx`, `not-found.tsx` vain segmenteille, jotka tarvitsevat custom UX
- Käytä Proxy API (`proxy.ts`) request-interceptioon

## Data & Caching

- **"use cache"**: Suosi funktiokehyksistä cachausta `"use cache"`-direktiivillä
- **Explicit caching**:
  - `cache: 'force-cache'` (static)
  - `next: { revalidate: N }` (ISR)
  - `cache: 'no-store'` (always fresh)
- **Revalidation**:
  - `revalidateTag(tag, 'max')` SWR:lle
  - `updateTag(tag)` Server Actionsissa read-your-writes-tilanteisiin
- Merkitse server-only: `import 'server-only'`
- Kaikki DB-kyselyt `/data`:n kautta (parametrisoidut kyselyt)
- Request APIs: `await cookies()`, `await headers()`, `await draftMode()`

## Actions & Forms

- Server Actions: `"use server"`, validoi Zodilla, sitten `updateTag()` tai `revalidateTag()`

## Navigation

- **Server**: `redirect()`, `notFound()`, `forbidden()`, `unauthorized()`
- **Client**: `<Link>` (deklaratiivinen), `useRouter()` (imperatiivinen)
- Loading states: `loading.tsx` + `<Suspense>` async subtreeille

## State

- Priorisoi SSR: minimoi `useState`, suosi Server Components/Actions ja URL params jaettavalle tilalle
- Client components: kääri ei-kiireelliset UI-päivitykset `useTransition`-hookilla
- Älä kääri controlled input statea transitioneihin; `await`:n jälkeen transitionissa, kääri seuraava `setState` uuteen `startTransition`-kutsuun

## Security

- Suosi Data Access Layeria (DAL) eristämään arkaluonteiset data-operaatiot server-only-moduuleihin
- Auth-tarkistukset handlereissa/actionseissa (älä luota clientiin)

## Code Style

- Funktiot <60 riviä, single responsibility
- Fail fast eksplisiittisillä virheillä, guard clauses, early returns
- UI: konteksti yli labelien (minimaalinen teksti)
- Tyypit Zod-schemoista tai DB-tyypeistä

## Error Handling

- Erota toistuva validointi (Zod schemat) ja virheresponset uudelleenkäytettäviin funktioihin
- Toast-notifikaatiot feedbackille
