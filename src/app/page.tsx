import Image from "next/image";
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="w-full min-h-dvh grid place-items-center">
      <section className="flex flex-col gap-4 items-center justify-center">
        <Image
          src="/images/logo-turtle.png"
          alt="Tartaruga com canudo programando"
          width={120}
          height={120}
        />

        <article className="space-y-2 text-center w-full max-w-sm">
          <h1 className="text-xl font-medium">Uninter Social</h1>
          <p className="text-sm">
            Uninter Social é um projeto de rede social criado pelos alunos de
            ciência da computação da Uninter
          </p>
        </article>

        <Button size="sm" variant="outline" className="gap-2 group" asChild>
          <Link href="/sobre">
            Sobre o Projeto{" "}
            <MoveUpRightIcon className="size-4 transition-transform rotate-0 group-hover:rotate-45" />{" "}
          </Link>
        </Button>
      </section>
    </main>
  );
}
