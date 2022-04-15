const Pokemon = require('./pokemon') // Invocas el módulo que contiene la clase
// Crecacion de los objetos
const pikachu = new Pokemon("pikachu")  // Objeto pikachu
const bulbasaur = new Pokemon("bulbasaur")// Objeto Bulbasaur
const squirtle = new Pokemon("squirtle")// Objeto squirtle
const charmander = new Pokemon("charmander")// Objeto charmandar


console.log(pikachu.sayHello())
console.log(pikachu.sayMessage("Heey!"))


console.log(bulbasaur.sayHello())
console.log(bulbasaur.sayMessage("Heey!"))

console.log(charmander.sayHello())
console.log(charmander.sayMessage("Heey!"))

console.log(squirtle.sayHello())
console.log(squirtle.sayMessage("Heey!"))