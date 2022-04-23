const Spiderman = require('../app/spiderman')
describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => { //Primer Test de Prueba
        //Instancia de la clase Spiderman
        const andrewGarfield = new Spiderman("Spider-Man Sony", 31, "Andrew Garfield", 2, "Sony")
        //Validaciones de las pruebas
        expect(andrewGarfield.name).toBe("Spider-Man Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield");
        expect(andrewGarfield.movies).toBe(2);
        expect(andrewGarfield.studio).toBe("Sony");
    });

    test('Case 2 Use the method getInfo()', () => {//Segundo Test de prueba
        //Instancia de la clase Spiderman con thomHoland
        const thomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel studio") //Colocamos los elemetos que toma el contructor
        //Validacion de la prueba
        expect(thomHolland.getInfo()).toBe("Hey, I´m Tom Holland from Marvel studio");
    });
})