"use client";
import NavBar from "@/components/widgets/navbar";
import { useImc } from "@/lib/hooks/useImc";

export default function Result() {
  const { result } = useImc();
  return (
    <>
      <header className="w-full background shadow-lg">
        <NavBar />
      </header>
      <main className="w-full">
        <section className="flex flex-col items-center">
          <p className="text-2xl mt-20">{result}</p>
        </section>
      </main>
    </>
  );
}

