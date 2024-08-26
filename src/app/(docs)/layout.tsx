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

      <main className="min-h-[calc(100dvh-128px)]">
        <section className="container">
          <article className="prose dark:prose-invert prose-li:m-0 pb-10">
            {children}
          </article>
        </section>
      </main>
    </>
  );
}
