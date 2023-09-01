export const edad = (nombres, edades) => {
  let mayor = 0;
  let index = 0;
  console.log(edades);
  for (let i = 0; i < 3; i++) {
    console.log(edades[i]);
    if (mayor < edades[i]) {
      mayor = edades[i];
      index = i;
    }
  }
  return `${nombres[index]} es la persona con más edad (${edades[index]} años)`;
};
