import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Marketing Layout
 *
 * Use route groups like (marketing) to share layouts
 * without adding URL segments.
 *
 * Example routes using this layout:
 * - /about → app/(marketing)/about/page.tsx
 * - /pricing → app/(marketing)/pricing/page.tsx
 */

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

