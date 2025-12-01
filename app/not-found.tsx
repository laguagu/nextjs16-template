import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <p className="text-primary text-6xl font-bold tracking-tight">😭</p>
        </div>
        <h1 className="text-primary text-4xl font-extrabold tracking-tight">
          Oh no!
          <br />
          This page is lost.
        </h1>
        <p className="text-muted-foreground text-lg">
          It looks like the page you were looking for doesn&apos;t exist. Maybe
          it was moved, or perhaps it never existed at all...
        </p>
        <Link
          href="/"
          className="mx-auto flex max-w-48 justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-100 focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:outline-hidden"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
}
