/* 
export const getColor = (imc: number) => {
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

export const resultIMC = (imc: number) => {
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
} */

export const imcResult = (imc: number) => {
  const imcRanges = [
    { max: 18.5, color: "#ADD8E6", text: "Vous êtes en insuffisance pondérale" },
    { min: 18.5, max: 25, color: "#90EE90", text: "Vous avez un poids normal" },
    { min: 25, max: 30, color: "#FFD700", text: "Vous êtes légèrement en surpoids" },
    { min: 30, max: 35, color: "#FFA500", text: "Vous êtes en surpoids" },
    { min: 35, max: 40, color: "#FF4500", text: "Vous êtes en obésité" },
    { min: 40, color: "#FF0000", text: "Vous êtes en obésité morbide" },
  ];

  for (const range of imcRanges) {
    if ((range.min === undefined || imc >= range.min) && (range.max === undefined || imc < range.max)) {
      return { color: range.color, text: range.text };
    }
  }
}

export const errorDateInput = (date: string) => {
    // if(date === "" || new Date(date) > new Date()) {
    //   return true
    // } else {
    //   return false
  // }
  return date === "" || new Date(date) > new Date();
}

export const heightInputVerification = (height: number, MINHEIGHT: number, MAXHEIGHT: number) => {
  return height < MINHEIGHT || height > MAXHEIGHT;
}

export const weightInputVerfification = (weight: number, MAXWEIGHT: number) => {
  return weight <= 0 || weight > MAXWEIGHT;
}