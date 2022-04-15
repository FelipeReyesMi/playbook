
export default class Pokemon{ //Declaracion de la clase Pokemon
  constructor(name){ //Contructor de la clase Pokemon
      this.name = name
  }
  sayHello() {//Declaracion del metodo sayHello
      console.log( `Mi pokemon ${this.name} te saluda!!!`)
  }
}


