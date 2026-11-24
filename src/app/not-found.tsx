import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg">This page doesn’t exist.</h1>
      <p className="mt-3 text-muted">The link may be broken, or the page may have moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-10 w-fit items-center rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
