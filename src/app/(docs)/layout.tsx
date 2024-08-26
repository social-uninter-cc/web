import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <div className="container h-20 flex items-center">
          <h1 className="font-medium text-xs">
            <Link href="/">Uninter Social</Link>
          </h1>
        </div>
      </header>

      <main className="min-h-[calc(100dvh-80px)]">
        <section className="container">
          <article className="prose prose-li:m-0">{children}</article>
        </section>
      </main>
    </>
  );
}
