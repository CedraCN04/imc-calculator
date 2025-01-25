import plat from "@/public/plat-vegetarien.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Homepage() {
  return (
    <>
      <header className="mt-36 w-4/5 grid grid-cols-1 place-items-center gap-20">
        <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-10 xl:w-3/5">
            <h1 className="font-bold text-2xl">
              Suivez la progression de votre indice de masse corporelle.
            </h1>
            <p className="text-sm">
              Cette application a pour but de vous forunir un aperçu de votre
              IMC (indice de masse corporelle), si vous souhaitez démarrer un
              rééquilibrage alimentaire ou la pratique d&apos;un sport,
              consultez un professionnel de santé.
            </p>
          </div>
          <Image
            src={plat}
            alt="Un plat végétarien"
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
            className="border rounded-lg shadow-xl border-black"
          />
        </div>
        <Link
          href="/calcul"
          className="bg-blue-300 hover:bg-blue-500 transition-colors duration-500 ease-in-out text-base lg:text-xl text-black hover:text-white py-2 px-4 rounded-lg"
        >
          Calculez votre IMC
        </Link>
      </header>
      <section className="w-4/5 grid grid-cols-1 place-items-center gap-20 my-20 md:grid-cols-2">
        <Image
          src={plat}
          alt="Un plat végétarien"
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
          className="border rounded-lg shadow-xl border-black"
        />
        <div className="grid grid-cols-1 place-items-center gap-10">
          <h2 className="text-xl font-bold">Ce que vous pouvez faire.</h2>
          <div className="grid grid-cols-1 place-items-center gap-10 text-sm">
            <p>
              Cette application a pour but de vous donner un aperçu de votre
              rapport poids / taille.
            </p>
            <p className="hidden">
              Vous pouvez vous inscrire ou vous connecter à votre compte afin de
              planifier des objectifs clairs sur l&apos;IMC que vous souhaitez
              atteindre, vous pourrez également visionner votre progression
              grâce à un graphique.{" "}
            </p>
            <p>
              Avant de démarrer un rééquilibrage alimentaire ou la pratique
              d&apos;un sport, consultez un professionnel de santé.
            </p>
            <div className="grid grid-cols-2 place-items-center gap-5">
              <Button>Créez un compte</Button>
              <Button>Connexion</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

