export const msj = (nota1, nota2, nota3) => {
  const promedio = (nota1 + nota2 + nota3) / 3;
  if (promedio <= 3.9) {
    return "Estudie";
  }
  return "Becado";
};
