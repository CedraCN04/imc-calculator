import { CardInfosProps } from "@/types/types";

export const CardInfosUser: CardInfosProps[] = [
  {
    id: "height",
    title: "Taille",
    description: "En centimètres",
    placeholder: "Entrez votre taille",
    error: "Veuillez entrer une taille valide",
    type: "number",
  },
  {
    id: "weight",
    title: "Poids",
    description: "En kilogrammes",
    placeholder: "Entrez votre poids",
    error: "Veuillez entrer un poids valide",
    type: "number",
  },
  {
    id: "date",
    title: "Date",
    description: "Date du calcul",
    placeholder: "Date du calcul",
    error: "Veuillez entrer une date valide",
    type: "date",
  }
];