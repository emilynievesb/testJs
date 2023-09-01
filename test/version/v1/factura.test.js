import { factura } from "../../../version/v1/factura";

describe("test del archivo factura.js", () => {
  test("La función factura devuelve un string", () => {
    let app = factura();
    expect(typeof app).toBe("string");
  });
  test("La función factura devuelve el total de la compra", () => {
    let app = factura("Arroz", 200, 3);
    expect(app).toBe(
      "El comprador debe pagar por su producto Arroz un total de 600"
    );
  });
  test("La función factura devuelve el total de la compra", () => {
    let app = factura("Pan", 500, 2);
    expect(app).toBe(
      "El comprador debe pagar por su producto Pan un total de 1000"
    );
  });
});
