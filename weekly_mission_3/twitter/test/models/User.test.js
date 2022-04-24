const User = require('./../../app/models/User')

describe("",()=>{

    test('Create an User object',()=>{
        //Creacion del obejto, instancia de la clase
        const user = new User(1, "FelipeReyesMi","Felipe","Bio","dateCreated","lastUpdate")
        //Aqui validamos los resultados de nuestro codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe("FelipeReyesMi")
        expect(user.name).toBe("Felipe")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    });
})