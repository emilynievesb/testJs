export const estudiantes = (est) => {
  let mayor = 0;
  let menor = Infinity;
  let mujeres = 0;
  let hombres = 0;
  let indexMenor = 0;
  let indexMayor = 0;
  for (let i = 0; i < est.length; i++) {
    let { nota } = est[i];
    let { sexo } = est[i];
    if (mayor < nota) {
      mayor = nota;
      indexMayor = i;
    }
    if (menor > nota) {
      menor = nota;
      indexMenor = i;
    }
    if (sexo === "F") {
      mujeres++;
    }
    if (sexo === "M") {
      hombres++;
    }
  }
  return `${est[indexMayor].nombre} es el estudiante con mayor nota (${mayor}), ${est[indexMenor].nombre} es el estudiante con menor nota (${menor}). Hay ${mujeres} mujeres y ${hombres} hombres`;
};
