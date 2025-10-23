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
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Next.js 16
        </h1>
        <p className="text-lg text-muted-foreground">
          A simple, production-ready template with best practices
        </p>
        <div className="flex gap-4 mt-4">
          <Button size="lg" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-16">
        <Card>
          <CardHeader>
            <CardTitle>use cache directive</CardTitle>
            <CardDescription>Next.js 16 caching</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use the new "use cache" directive for automatic function-level
              caching
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
              Server Actions with inline Zod validation
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
