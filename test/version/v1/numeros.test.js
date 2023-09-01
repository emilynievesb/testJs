import { numeros } from "../../../version/v1/numeros";

describe("test del archivo numeros.js", () => {
  test("La función numeros devuelve un string", () => {
    let num = [1, 6, 3];
    let app = numeros(num);
    expect(typeof app).toBe("string");
  });
  test("La función numeros devuelve datos requeridos", () => {
    let num = [1, 6, 3];
    let app = numeros(num);
    expect(app).toBe(
      "La sumatoria de números es 10, el valor promedio es de 3.33, fueron digitados 3, el valor mayor es 6 y el menor 1"
    );
  });
  test("La función numeros devuelve que Andrés es la persona mayor", () => {
    let num = [5, 2, 3];
    let app = numeros(num);
    expect(app).toBe(
      "La sumatoria de números es 10, el valor promedio es de 3.33, fueron digitados 3, el valor mayor es 5 y el menor 2"
    );
  });
});
