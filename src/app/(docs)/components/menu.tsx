"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { cn } from "~/lib/utils";

const links = [
  {
    title: "",
    items: [
      {
        title: "Sobre o Projeto",
        href: "/sobre",
      },
    ],
  },
];

type Props = {
  adrs: Array<{ title: string; href: string }>;
};

export function DocsMenu({ adrs }: Props) {
  const pathname = usePathname();

  const isCurrentActive = useCallback(
    (path: string) => path === pathname,
    [pathname],
  );

  return (
    <aside className="space-y-6">
      {links.map((group) => {
        return (
          <section key={group.title} className="space-y-4">
            {group.title.length ? (
              <h4 className="text-xs uppercase font-medium text-muted-foreground">
                {group.title}
              </h4>
            ) : null}

            {group.title === "ADR" ? (
              <nav className="flex flex-col gap-1">
                {adrs.map((adr) => (
                  <Link
                    key={adr.href}
                    href={adr.href}
                    className={cn(
                      "text-sm text-muted-foreground/70 capitalize p-2 rounded-md border border-transparent",
                      {
                        "text-foreground bg-muted-foreground/5 border-foreground/10":
                          isCurrentActive(adr.href),
                      },
                    )}
                  >
                    {adr.title}
                  </Link>
                ))}
              </nav>
            ) : null}

            {group.title !== "ADR" ? (
              <nav className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm text-muted-foreground/70 capitalize p-2 rounded-md border border-transparent",
                      {
                        "text-foreground bg-muted-foreground/5 border-foreground/10":
                          isCurrentActive(item.href),
                      },
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
          </section>
        );
      })}
    </aside>
  );
}
