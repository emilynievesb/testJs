import { atletas } from "../../../version/v1/atletas";

describe("test del archivo atletas.js", () => {
  test("La función atletas devuelve un string", () => {
    let atl = [
      { nombre: "Emily", marca: 3.8 },
      { nombre: "Andres", marca: 4.8 },
      { nombre: "Oriana", marca: 1.8 },
    ];
    let app = atletas(atl);
    expect(typeof app).toBe("string");
  });
  test("La función atletas devuelve que Andres es la mayor marca, y demás atributos", () => {
    let atl = [
      { nombre: "Emily", marca: 37.8 },
      { nombre: "Andres", marca: 40.8 },
      { nombre: "Oriana", marca: 12.8 },
    ];
    let app = atletas(atl);
    expect(app).toBe(
      "Andres es la atleta con medalla de oro (40.8), y si rompió el record. EL pago es de 500 millones"
    );
  });
  test("La función estudiantes devuelve que Santiago es la mayor marca, y demás atributos", () => {
    let est = [
      { nombre: "Emily", marca: 15.4 },
      { nombre: "Andres", marca: 2.8 },
      { nombre: "Santiago", marca: 4.9 },
    ];
    let app = atletas(est);
    expect(app).toBe(
      "Emily es la atleta con medalla de oro (15.4), y no rompió el record. EL pago es de 500 millones"
    );
  });
});
