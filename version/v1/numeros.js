export const numeros = (numeros) => {
  let sum = 0;
  let mayor = 0;
  let menor = Infinity;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
    if (mayor < numeros[i]) {
      mayor = numeros[i];
    }
    if (menor > numeros[i]) {
      menor = numeros[i];
    }
  }
  return `La sumatoria de números es ${sum}, el valor promedio es de ${(
    sum / numeros.length
  ).toFixed(2)}, fueron digitados ${
    numeros.length
  }, el valor mayor es ${mayor} y el menor ${menor}`;
};
