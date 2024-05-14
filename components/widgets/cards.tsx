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
import { CardInfosUser } from "@/lib/constants";
import { useImc } from "@/lib/hooks/useImc";

export default function CardInfos() {
  const { result, calculateIMC, userInput, heightError, weightError } =
    useImc();

  return (
    <div className="my-40 w-full flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-10 w-full lg:flex-row lg:justify-between xl:w-4/5">
        {CardInfosUser.map((card) => (
          <Card className="w-11/12 mx-auto md:w-[450px]" key={card.id}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="number"
                placeholder={card.placeholder}
                onChange={(e) => userInput(card, e)}
              />
              {card.id === "height" && heightError && (
                <p className="text-red-500 py-6 self-center transition-opacity duration-500 ease-in-out">
                  {card.error}
                </p>
              )}
              {card.id === "weight" && weightError && (
                <p className="text-red-500 py-6 self-center">{card.error}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="count" className="lg:w-1/6" onClick={calculateIMC}>
        Calculer
      </Button>
      {result && <p className="text-center">{result}</p>}
    </div>
  );
}

