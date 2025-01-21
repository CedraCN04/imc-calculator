import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CardInfosUser } from "@/lib/constants";
import { CardInfosProps } from "@/types/types";
import Errors from "./errors";
import UserDateInput from "./userDate";

export type UserInformationsProps = {
  userInput: (
    cardId: CardInfosProps,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  heightInput: string;
  weightInput: string;
  dateInput: string;
  heightError: boolean;
  weightError: boolean;
  dateInputError: boolean;
};

export default function UserInformations({
  userInput,
  heightInput,
  weightInput,
  dateInput,
  heightError,
  weightError,
  dateInputError,
}: UserInformationsProps) {
  return (
    <div className="flex flex-col items-center gap-10 w-full lg:flex-row lg:justify-between xl:w-4/5">
      {CardInfosUser.map((card) => (
        <Card className="w-10/12 mx-auto md:w-[350px] h-full" key={card.id}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              type="number"
              placeholder={card.placeholder}
              onChange={(e) => userInput(card, e)}
              value={card.id === "height" ? heightInput : weightInput}
            />
            <Errors
              heightError={heightError && card.id === "height"}
              weightError={weightError && card.id === "weight"}
              dateInputError={dateInputError && card.id === "date"}
            />
          </CardContent>
        </Card>
      ))}
      <UserDateInput
        userInput={userInput}
        dateInput={dateInput}
        dateInputError={dateInputError}
      />
    </div>
  );
}

