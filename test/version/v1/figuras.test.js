import { figuras } from "../../../version/v1/figuras";

describe("test del archivo figuras.js", () => {
  test("La función figuras devuelve un string", () => {
    let app = figuras();
    expect(typeof app).toBe("string");
  });
  test("La función figuras devuelve el perímetro de un cuadrado y el área de un rectángulo", () => {
    let app = figuras(5, 2, 3);
    expect(app).toBe(
      "El perímetro del cuadrado es 20, y el area del rectángulo es 6"
    );
  });
  test("La función figuras devuelve el perímetro de un cuadrado y el área de un rectángulo", () => {
    let app = figuras(2, 2, 2);
    expect(app).toBe(
      "El perímetro del cuadrado es 8, y el area del rectángulo es 4"
    );
  });
});
