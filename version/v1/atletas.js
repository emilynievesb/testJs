export const atletas = (atl) => {
  let mayor = 0;
  let indexMayor = 0;
  for (let i = 0; i < atl.length; i++) {
    let { marca } = atl[i];
    if (mayor < marca) {
      mayor = marca;
      indexMayor = i;
    }
  }
  if (mayor > 15.5) {
    return `${atl[indexMayor].nombre} es la atleta con medalla de oro (${mayor}), y si rompió el record. EL pago es de 500 millones`;
  }
  return `${atl[indexMayor].nombre} es la atleta con medalla de oro (${mayor}), y no rompió el record. EL pago es de 500 millones`;
};
