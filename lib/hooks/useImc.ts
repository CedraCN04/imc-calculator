import { CardInfosProps } from "@/types/types";
import { useState } from "react";

export const useImc = () => {
  const [heightUser, setHeightUser] = useState(0);
  const [weightUser, setWeightUser] = useState(0);
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    if (heightUser > 0 && weightUser > 0) {
      const imc = weightUser / Math.pow(heightUser, 2);
      setResult(`Votre IMC est de ${imc.toFixed(2)}`);
      if (imc < 18.5) {
        setResult(
          `Votre IMC est de ${imc.toFixed(
            2
          )}, vous êtes en insuffisance pondérale`
        );
      } else if (imc >= 18.5 && imc < 25) {
        setResult(
          `Votre IMC est de ${imc.toFixed(2)}, vous avez un poids normal`
        );
      } else if (imc >= 25 && imc < 30) {
        setResult(`Votre IMC est de ${imc.toFixed(2)}, vous êtes en surpoids`);
      } else if (imc >= 30 && imc < 35) {
        setResult(
          `Votre IMC est de ${imc.toFixed(2)}, vous êtes en obésité modérée`
        );
      } else if (imc >= 35 && imc < 40) {
        setResult(
          `Votre IMC est de ${imc.toFixed(2)}, vous êtes en obésité sévère`
        );
      } else {
        setResult(
          `Votre IMC est de ${imc.toFixed(2)}, vous êtes en obésité morbide`
        );
      }
    }
  };

  const userInput = (
    cardId: CardInfosProps,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;
    if (cardId.id === "height" && value.length === 1 && !value.includes(".")) {
      value = value + ".";
    }
    if (cardId.id === "weight") {
      setWeightUser(Number(value));
    } else {
      setHeightUser(Number(value));
    }
    e.target.value = value;
  };

  return { heightUser, weightUser, result, calculateIMC, userInput};
}