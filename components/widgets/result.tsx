type ResultProps = {
  result: {
    imc: string;
    color: string;
  };
  textResult: string;
};

export default function Result({ result, textResult }: ResultProps) {
  return (
    <div>
      {result && result.imc && result.color && (
        <p
          style={{ backgroundColor: result.color }}
          className="text-center text-2xl font-bold h-40 w-40 rounded-full flex items-center justify-center mx-auto"
        >
          {result.imc}
        </p>
      )}
      {textResult && <p className="text-center text-lg mt-10">{textResult}</p>}
    </div>
  );
}

