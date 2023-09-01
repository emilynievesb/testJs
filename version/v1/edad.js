export const edad = (nombres, edades) => {
  let mayor = 0;
  let index = 0;
  for (let i = 0; i < edades.length; i++) {
    if (mayor < edades[i]) {
      mayor = edades[i];
      index = i;
    }
    return `${nombres[index]} es la persona con más edad (${edades[index]} años)`;
  }
};
