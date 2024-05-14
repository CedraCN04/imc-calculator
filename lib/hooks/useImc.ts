import { CardInfosProps } from "@/types/types";
import { useState } from "react";

export const useImc = () => {
  const [heightUser, setHeightUser] = useState(0);
  const [weightUser, setWeightUser] = useState(0);
  const [result, setResult] = useState("");
  const [heightError, setHeightError] = useState(false)
  const [weightError, setWeightError] = useState(false)

  const calculateIMC = () => {
    if (heightUser < 100 || heightUser > 250) {
      setHeightError(true)
    } else {
      setHeightError(false)
    }
    if (weightUser <= 0 || weightUser > 250) {
      setWeightError(true)
    } else {
      setWeightError(false)
    }
    if (heightUser >= 100 && weightUser > 0) {
      const imc = weightUser / Math.pow(heightUser / 100, 2);
      setResult(`Votre IMC est de ${imc.toFixed(2)}, ${resultIMC(imc)}`);
    }
  };

  const resultIMC = (imc: number) => {
    if (imc < 18.5) {
      return "vous êtes en insuffisance pondérale";
    } else if (imc >= 18.5 && imc < 25) {
      return "vous avez un poids normal";
    } else if (imc >= 25 && imc < 30) {
      return "vous êtes légèrement en surpoids";
    } else if (imc >= 30 && imc < 35) {
      return "vous êtes en surpoids";
    } else if (imc >= 35 && imc < 40) {
      return "vous êtes en obésité";
    } else {
      return "vous êtes en obésité morbide";
    }
  }

  const userInput = (
    cardId: CardInfosProps,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;
    if (cardId.id === "weight") {
      setWeightUser(Number(value));
    } else {
      setHeightUser(Number(value));
    }
  };

  return { heightUser, weightUser, result, calculateIMC, userInput, heightError, weightError};
}