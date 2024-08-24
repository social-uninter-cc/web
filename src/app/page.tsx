import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-dvh grid place-items-center">
      <section className="flex items-center flex-col space-y-6">
        <Image
          src="/images/logo-turtle.png"
          alt="Tartaruga com canudo"
          width={120}
          height={120}
        />
        <h2 className="text-sm font-medium">Uninter Social</h2>
      </section>
    </main>
  );
}
