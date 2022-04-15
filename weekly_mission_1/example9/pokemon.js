class Pokemon{ //Declaracion de la clase Pokemon
    constructor(name){ //Contructor de la clase Pokemon
        this.name = name
    }
    sayHello() {//Declaracion del metodo sayHello
        return `Mi pokemon ${this.name} te saluda!!!`
    }
    sayMessage(message) { //Declaracion del metodo sayMessage que tendra un parametro como entrada
        return `Mi pokemon ${this.name} dice: ${message}`
    }

}

module.exports = Pokemon //Declaramos el module.exports para poder mandar a exportar la clase