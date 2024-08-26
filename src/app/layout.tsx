import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "~/components/theme/provider";
import { ToggleTheme } from "~/components/theme/toggle";
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Uninter Social",
    template: "%s | Uninter Social",
  },
  description:
    "Rede social criada pelos alunos de Ciência da Computação da Uninter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}

          <footer>
            <div className="container flex h-12 items-center justify-between">
              <ToggleTheme />{" "}
              <nav className="flex gap-3">
                <Link
                  href="/sobre"
                  className="text-xs font-medium hover:underline"
                >
                  Sobre o projeto
                </Link>

                <a
                  href="https://github.com/social-uninter-cc"
                  className="text-xs font-medium hover:underline flex items-center gap-1"
                >
                  Github <MoveUpRightIcon className="size-3" />
                </a>
              </nav>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
