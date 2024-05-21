"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Result from "@/components/widgets/result";
import { CardInfosUser } from "@/lib/constants";
import { useImc } from "@/lib/hooks/useImc";

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
    heightError,
    weightError,
    dateInputError,
  } = useImc();

  return (
    <div className="my-20 w-full flex flex-col items-center gap-20">
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
        <div className="flex flex-col items-center gap-10 w-full lg:flex-row lg:justify-between xl:w-4/5">
          {CardInfosUser.map((card) => (
            <Card className="w-10/12 mx-auto md:w-[350px] h-full" key={card.id}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {card.type === "number" ? (
                  <Input
                    type={card.type}
                    placeholder={card.placeholder}
                    onChange={(e) => userInput(card, e)}
                    value={card.id === "height" ? heightInput : weightInput}
                  />
                ) : (
                  <Input
                    type={card.type}
                    placeholder={card.placeholder}
                    onChange={(e) => userInput(card, e)}
                  />
                )}
                {card.id === "height" && heightError && (
                  <p className="text-red-500 py-6 self-center contentOpacity delay-0">
                    {card.error}
                  </p>
                )}
                {card.id === "weight" && weightError && (
                  <p className="text-red-500 py-6 self-center contentOpacity delay-0">
                    {card.error}
                  </p>
                )}
                {card.id === "date" && dateInputError && (
                  <p className="text-red-500 py-6 self-center contentOpacity delay-0">
                    {card.error}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
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

