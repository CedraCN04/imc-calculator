import { CardInfosProps } from "@/types/types";
import { useState } from "react";

export const useImc = () => {
  const [heightUser, setHeightUser] = useState(0);
  const [weightUser, setWeightUser] = useState(0);
  const [result, setResult] = useState({imc: "", color: ""})
  const [textResult, setTextResult] = useState("");
  const [heightError, setHeightError] = useState(false)
  const [weightError, setWeightError] = useState(false)
  const [imcValide, setImcValide] = useState(false)

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
      setResult({imc:imc.toFixed(2), color: getColor(imc)});
      setTextResult(resultIMC(imc));
      setImcValide(true);
    } else {
      setImcValide(false);
    }
  };

  const getColor = (imc: number) => {
    if (imc < 18.5) {
      return "#ADD8E6";
    } else if (imc >= 18.5 && imc < 25) {
      return "#90EE90";
    } else if (imc >= 25 && imc < 30) {
      return "#FFD700";
    } else if (imc >= 30 && imc < 35) {
      return "#FFA500";
    } else if (imc >= 35 && imc < 40) {
      return "#FF4500";
    } else {
      return "#FF0000";
    }
  }

  const resultIMC = (imc: number) => {
    if (imc < 18.5) {
      return "Vous êtes en insuffisance pondérale";
    } else if (imc >= 18.5 && imc < 25) {
      return "Vous avez un poids normal";
    } else if (imc >= 25 && imc < 30) {
      return "Vous êtes légèrement en surpoids";
    } else if (imc >= 30 && imc < 35) {
      return "Vous êtes en surpoids";
    } else if (imc >= 35 && imc < 40) {
      return "Vous êtes en obésité";
    } else {
      return "Vous êtes en obésité morbide";
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

  return { heightUser, weightUser, result, textResult, calculateIMC, userInput, heightError, weightError, imcValide};
}