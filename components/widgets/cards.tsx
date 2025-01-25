"use client";

import { Button } from "@/components/ui/button";
import Result from "@/components/widgets/result";
import { useImc } from "@/lib/hooks/useImc";
import UserInformations from "./userInformations";

export default function CardInfos() {
  const {
    calculateIMC,
    userInput,
    reset,
    result,
    textResult,
    imcValide,
    heightInput,
    weightInput,
    dateInput,
    heightError,
    weightError,
    dateInputError,
  } = useImc();

  return (
    <div className="my-20 w-full flex flex-col items-center gap-20 min-h-dvh">
      <h1 className="w-4/5 text-center">
        Entrez votre taille et votre poids pour connaître votre Indice de Masse
        Corporelle
      </h1>
      <Result result={result} textResult={textResult} />
      <div
        className={`flex flex-col items-center gap-10 w-full ${
          imcValide ? "slideDown" : ""
        }`}
      >
        <UserInformations
          userInput={userInput}
          heightInput={heightInput}
          weightInput={weightInput}
          dateInput={dateInput}
          heightError={heightError}
          weightError={weightError}
          dateInputError={dateInputError}
        />
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          <Button variant="count" className="lg:w1/6" onClick={calculateIMC}>
            Calculer
          </Button>
          {imcValide && (
            <Button
              variant="reset"
              className="lg:w1/6 contentOpacity"
              onClick={reset}
            >
              Réinitialiser
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

