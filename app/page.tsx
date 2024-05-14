import CardInfos from "@/components/widgets/cards";
import NavBar from "@/components/widgets/navbar";

export default function Home() {
  return (
    <>
      <header className="w-full background shadow-lg">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto">
        <section className="flex flex-col justify-center items-center mx-auto">
          <CardInfos />
        </section>
      </main>
    </>
  );
}

