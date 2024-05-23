import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserDate } from "@/lib/constants";
import { CardInfosProps } from "@/types/types";
import Errors from "./errors";

type UserDateProps = {
  userInput: (
    cardId: CardInfosProps,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  dateInput: string;
  dateInputError: boolean;
};

export default function UserDateInput({
  userInput,
  dateInput,
  dateInputError,
}: UserDateProps) {
  return (
    <>
      <Card className="w-10/12 mx-auto md:w-[350px] h-full">
        <CardHeader>
          <CardTitle>Date de calcul</CardTitle>
          <CardDescription>Entrez votre date de calcul</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="date"
            onChange={(e) => userInput(UserDate, e)}
            value={dateInput}
          />
          <Errors dateInputError={dateInputError} />
        </CardContent>
      </Card>
    </>
  );
}

