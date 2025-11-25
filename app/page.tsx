import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Next.js 16 Template
        </h1>
        <p className="text-lg text-muted-foreground">
          A production-ready starter with best practices built-in
        </p>
        <div className="mt-4 flex gap-4">
          <Button size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>use cache</CardTitle>
            <CardDescription>Function-level caching</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Next.js 16 &quot;use cache&quot; directive for automatic caching
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Server Actions</CardTitle>
            <CardDescription>Built-in form handling</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Type-safe mutations with Zod validation
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>React 19</CardTitle>
            <CardDescription>Latest React features</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              useActionState, useFormStatus, React Compiler
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tailwind v4</CardTitle>
            <CardDescription>Modern styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CSS variables, shadcn/ui components ready
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
