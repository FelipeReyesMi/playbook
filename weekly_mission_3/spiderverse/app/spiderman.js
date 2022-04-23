class Spiderman {//Creacion de la clase Spiderman
    constructor(name, age, actor, movies, studio) { //Creacion del metodo que tomara 5 parametros
        //Declaración de los apartados que tomaran el valor que se le de 
        this.name = name,
            this.age = age,
            this.actor = actor,
            this.movies = movies,
            this.studio = studio
    }

    getInfo() {//Declaracion del metodo que sera llamado 
        return `Hey, I´m ${this.actor} from ${this.studio}` //Resultado que se nos devolvera al llamar el metodo
    }
}

module.exports = Spiderman //Exportacion de la clase