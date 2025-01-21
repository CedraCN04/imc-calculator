
export const imcResult = (imc: number) => {
  const imcRanges = [
    { max: 18.5, color: "#ADD8E6", text: "Vous êtes en insuffisance pondérale" },
    { min: 18.5, max: 25, color: "#90EE90", text: "Vous avez un poids normal" },
    { min: 25, max: 30, color: "#FFD700", text: "Vous êtes en surpoids" },
    { min: 30, max: 35, color: "#FFA500", text: "Vous êtes en obésité" },
    { min: 35, max: 40, color: "#FF4500", text: "Vous êtes en obésité sévère" },
    { min: 40, color: "#FF0000", text: "Vous êtes en obésité morbide" },
  ];

  for (const range of imcRanges) {
    if ((range.min === undefined || imc >= range.min) && (range.max === undefined || imc < range.max)) {
      return { color: range.color, text: range.text };
    }
  }
}

export const errorDateInput = (date: string) => {
  return date === "" || new Date(date) > new Date();
}

export const heightInputVerification = (height: number, MINHEIGHT: number, MAXHEIGHT: number) => {
  return height < MINHEIGHT || height > MAXHEIGHT;
}

export const weightInputVerfification = (weight: number, MAXWEIGHT: number) => {
  return weight <= 0 || weight > MAXWEIGHT;
}