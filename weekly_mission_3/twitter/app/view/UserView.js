const UserService = require('./../services/UserService')

class UserView {//Creacion de la clase 
    static createUser(payload) {//Creacion del metodo
        if (payload === null) {//Condicion, si payload es varlor null pasa hacer el if
            console.log("Error es null")//Imprime el mensaje de error
            return {
                error: "El payload no existe."
            }
        } else if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
            return UserService.create(payload.id, payload.username, payload.name)
        } else {
            return {
                error: "Error, las propiedades del payload necesitan tener un valor válido"
            }
        }
    }
}


module.exports = UserView