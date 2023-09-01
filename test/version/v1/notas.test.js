import { msj } from "../../../version/v1/notas.js";

describe("test del archivo notas.js", () => {
  test("La función msj devuelve un string", () => {
    let app = msj();
    expect(typeof app).toBe("string");
  });
  test("La función msj devuelve 'Estudie'", () => {
    let app = msj(1, 2, 3);
    expect(app).toBe("Estudie");
  });
  test("La función msj devuelve 'Becado'", () => {
    let app = msj(5, 5, 3);
    expect(app).toBe("Becado");
  });
});
