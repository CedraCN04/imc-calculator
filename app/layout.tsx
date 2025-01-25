import Footer from "@/components/widgets/footer";
import NavBar from "@/components/widgets/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMC Calculator",
  description: "Calculer votre Indice de Masse Corporelle (IMC)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-gradient-to-br from-sky-100 to-indigo-300`}
      >
        <header className="w-full background shadow-lg">
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

