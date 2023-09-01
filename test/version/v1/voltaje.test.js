import { voltaje } from "../../../version/v1/voltaje";

describe("test del archivo voltaje.js", () => {
  test("La función votaje devuelve un string", () => {
    let app = voltaje();
    expect(typeof app).toBe("number");
  });
  test("La función votaje devuelve 20", () => {
    let app = voltaje(2, 10);
    expect(app).toBe(20);
  });
  test("La función votaje devuelve 10", () => {
    let app = voltaje(2, 5);
    expect(app).toBe(10);
  });
});
