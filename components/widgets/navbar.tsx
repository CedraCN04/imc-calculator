"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const shouldShowLink = pathname !== "/";

  return (
    <nav className="flex justify-center items-center gap-6 w-4/5 mx-auto py-2 md:py-6">
      {shouldShowLink && (
        <Link
          href="/"
          className="bg-blue-300 hover:bg-blue-500 transition-colors duration-500 ease-in-out text-base lg:text-xl text-black hover:text-white py-2 px-4 rounded-lg"
        >
          Accueil
        </Link>
      )}
      <h1 className="md:text-xl">Calculateur d&apos;IMC</h1>
    </nav>
  );
}

