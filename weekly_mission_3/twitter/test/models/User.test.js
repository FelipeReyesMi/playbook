const User = require('./../../app/models/User')

describe("",()=>{

    test('Create an User object',()=>{
        //Creacion del obejto, instancia de la clase
        const user = new User(1, "FelipeReyesMi","Felipe","Bio")
        //Aqui validamos los resultados de nuestro codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe("FelipeReyesMi")
        expect(user.name).toBe("Felipe")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()//Verificamos que el valor no sea undefine
        expect(user.lastUpdate).not.toBeUndefined()
    });
    test('Add getters',()=>{
        //Creacion del obejto, instancia de la clase
        const user = new User(1, "FelipeReyesMi","Felipe","Bio")
        //Aqui validamos los resultados de nuestro codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha
        
        expect(user.getUsername).toBe("FelipeReyesMi")
       
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()//Verificamos que el valor no sea undefine
        expect(user.getLastUpdate).not.toBeUndefined()
    });
})