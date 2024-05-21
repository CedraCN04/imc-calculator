import { errorDateInput, heightInputVerification, imcResult, weightInputVerfification } from "@/lib/functions";
import { CardInfosProps } from "@/types/types";
import { useState } from "react";

export const useImc = () => {

  const [userDetails, setUserDetails] = useState({height:0, weight:0, heightInput:"", weightInput:"", dateInput:"", imcValide:false, result:{imc:"", color:""}, textResult:""})

  const [userError, setUserError] = useState({heightError:false, weightError:false, dateInputError:false})

  let details = {...userDetails}
  let errors = {...userError}

  const MINHEIGHT = 100
  const MAXHEIGHT = 250
  const MAXWEIGHT = 300

  // Vérifications des données entrées par l'utilisateur
  const inputsVerification = () => {
    errors.heightError = heightInputVerification(details.height, MINHEIGHT, MAXHEIGHT);
    errors.weightError = weightInputVerfification(details.weight, MAXWEIGHT);
    errors.dateInputError = errorDateInput(details.dateInput);
    setUserError(errors);
  }

  // Récupération de l'objet imcResult 
  // Afficher un texte et une couleur précise en fonction de son résultat
  const imcResultObj = (imc:number) => {
    const imcResultObj = imcResult(imc);
    if (imcResultObj !== undefined) {
      details.result = { imc: imc.toFixed(2), color: imcResultObj.color };
      details.textResult = imcResultObj.text;
    }
  }

  // Calcul de l'imc
  const calculateIMC = () => {
    inputsVerification();
    if (details.height >= MINHEIGHT && details.weight > 0 && !errors.dateInputError) {
      const imc = details.weight / Math.pow(details.height / 100, 2);
      imcResultObj(imc);
      details.imcValide = true;
    } else {
      details.imcValide = false;
    }
    setUserDetails(details)
    }
  
  // Récupération des données entrées par l'utilisateur
  const userInput = (cardId: CardInfosProps, e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (cardId.id === "weight") {
      details.weight = Number(value);
      details.weightInput = value;
    } else if (cardId.id === "height") {
      details.height = Number(value);
      details.heightInput = value;
    } else {
      details.dateInput = value;
    }
    setUserDetails(details);
  }

  const reset = () => {
    setUserDetails({
      height: 0,
      weight: 0,
      heightInput: "",
      weightInput: "",
      imcValide: false,
      dateInput: "",
      result: { imc: "", color: "" },
      textResult: ""
    })
    setUserError({
      heightError: false,
      weightError: false,
      dateInputError: false
    })
    };

  return { ...userDetails, ...userError, calculateIMC, userInput, reset};
};