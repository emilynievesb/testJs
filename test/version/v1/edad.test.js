import { edad } from "../../../version/v1/edad";

describe("test del archivo edad.js", () => {
  test("La función edad devuelve un string", () => {
    let edades = [1, 6, 3];
    let nombres = ["Andrés", "David", "Sergio"];
    let app = edad(nombres, edades);
    expect(typeof app).toBe("string");
  });
  test("La función edad devuelve que Sergio es la persona mayor", () => {
    let edades = [1, 6, 3];
    let nombres = ["Andrés", "David", "Sergio"];
    let app = edad(nombres, edades);
    expect(app).toBe("David es la persona con más edad (6 años)");
  });
  test("La función edad devuelve que Andrés es la persona mayor", () => {
    let edades = [5, 2, 3];
    let nombres = ["Andrés", "David", "Sergio"];
    let app = edad(nombres, edades);
    expect(app).toBe("Andrés es la persona con más edad (5 años)");
  });
});
