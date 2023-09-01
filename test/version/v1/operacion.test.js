import { operacion } from "../../../version/v1/operacion";

describe("test del archivo operacion.js", () => {
  test("La función operacion devuelve un string", () => {
    let app = operacion();
    expect(typeof app).toBe("string");
  });
  test("La función operacion devuelve 'Suma y resta'", () => {
    let app = operacion(2, 1);
    expect(app).toBe("La suma de esto es 3 y la resta 1");
  });
  test("La función operacion devuelve 'División y multiplicación'", () => {
    let app = operacion(1, 5);
    expect(app).toBe("La división de esto es 5 y la multiplicación 5");
  });
});
