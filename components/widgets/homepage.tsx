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
              Cette application a pour but de vous fournir un aperçu de votre
              IMC (indice de masse corporelle).
            </p>
            <p className="text-red-500 font-bold">
              Si vous souhaitez démarrer un rééquilibrage alimentaire ou la
              pratique d&apos;un sport, consultez un professionnel de santé.
            </p>
            <Link
              href="/calcul"
              className="bg-blue-300 hover:bg-blue-500 transition-colors duration-500 ease-in-out text-base lg:text-xl text-black hover:text-white py-2 px-4 rounded-lg w-3/5 text-center mx-auto"
            >
              Calculez
            </Link>
          </div>
          <Image
            src={plat}
            alt="Un plat végétarien"
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
            className="border rounded-lg shadow-xl border-black"
          />
        </div>
      </header>
      <hr className="w-4/5 h-1 bg-slate-400 mt-20" />
      <section className="w-4/5 grid grid-cols-1 place-items-center gap-20 mt-20 mb-40 md:grid-cols-2">
        <Image
          src={plat}
          alt="Un plat végétarien"
          sizes="100vw"
          style={{ width: "80%", height: "auto" }}
          className="border rounded-lg shadow-xl border-black"
        />
        <div className="grid grid-cols-1 place-items-center gap-10">
          <h2 className="text-xl font-bold">Comment ça fonctionne ?</h2>
          <div className="grid grid-cols-1 place-items-center gap-10 text-sm">
            <p>
              Il vous suffira d&apos;entrer, votre poids, votre taille ainsi que
              la date à laquelle vous faites ce calcul et hop !
              L&apos;application se charge de tout ! Il ne vous restera plus
              qu&apos;à sauvegarder votre résultat pour le consulter plus tard
              et ainsi voir votre progression !
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

