import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 min-h-dvh">
      <h1>Bienvenue sur ce calculateur d&apos;IMC !</h1>
      <Link
        href="/calcul"
        className="bg-blue-300 hover:bg-blue-500 transition-colors duration-500 ease-in-out text-base lg:text-xl text-black hover:text-white py-2 px-4 rounded-lg"
      >
        Commencer
      </Link>
    </section>
  );
}

