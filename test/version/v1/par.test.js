import { par } from "../../../version/v1/par";

describe("test del archivo par.js", () => {
  test("La función par devuelve un string", () => {
    let app = par();
    expect(typeof app).toBe("string");
  });
  test("La función par devuelve 'Par'", () => {
    let app = par(2);
    expect(app).toBe("Par");
  });
  test("La función par devuelve 'Impar'", () => {
    let app = par(5);
    expect(app).toBe("Impar");
  });
});
