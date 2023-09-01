import { estudiantes } from "../../../version/v1/estudiantes";

describe("test del archivo estudiantes.js", () => {
  test("La función estudiantes devuelve un string", () => {
    let est = [
      { nombre: "Emily", sexo: "F", nota: 3.8 },
      { nombre: "Andres", sexo: "M", nota: 4.8 },
      { nombre: "Oriana", sexo: "F", nota: 1.8 },
    ];
    let app = estudiantes(est);
    expect(typeof app).toBe("string");
  });
  test("La función estudiantes devuelve que Andres es la mayor nota, y demás atributos", () => {
    let est = [
      { nombre: "Emily", sexo: "F", nota: 3.8 },
      { nombre: "Andres", sexo: "M", nota: 4.8 },
      { nombre: "Oriana", sexo: "F", nota: 1.8 },
    ];
    let app = estudiantes(est);
    expect(app).toBe(
      "Andres es el estudiante con mayor nota (4.8), Oriana es el estudiante con menor nota (1.8). Hay 2 mujeres y 1 hombres"
    );
  });
  test("La función estudiantes devuelve que Santiago es la mayor nota, y demás atributos", () => {
    let est = [
      { nombre: "Emily", sexo: "F", nota: 4.8 },
      { nombre: "Andres", sexo: "M", nota: 2.8 },
      { nombre: "Santiago", sexo: "M", nota: 4.9 },
    ];
    let app = estudiantes(est);
    expect(app).toBe(
      "Santiago es el estudiante con mayor nota (4.9), Andres es el estudiante con menor nota (2.8). Hay 1 mujeres y 2 hombres"
    );
  });
});
