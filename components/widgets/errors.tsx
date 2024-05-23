type ErrorsProps = {
  heightError?: boolean;
  weightError?: boolean;
  dateInputError?: boolean;
};

export default function Errors({
  heightError,
  weightError,
  dateInputError,
}: ErrorsProps) {
  return (
    <>
      {heightError && (
        <p className="text-red-500 w-full my-4">
          La taille doit être comprise entre 100 et 250 cm
        </p>
      )}
      {weightError && (
        <p className="text-red-500 w-full my-4">
          Le poids doit être compris entre 0 et 300 kg
        </p>
      )}
      {dateInputError && (
        <p className="text-red-500 w-full my-4">La date est incorrecte</p>
      )}
    </>
  );
}

