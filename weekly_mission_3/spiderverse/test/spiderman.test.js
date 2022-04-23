const Spiderman = require('../app/spiderman')
describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
        //Instancia de la clase Spiderman
      const andrewGarfield = new Spiderman("Spider-Man Sony",31,"Andrew Garfield",2,"Sony")
      //Validaciones de las pruebas
      expect(andrewGarfield.name).toBe("Spider-Man Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })