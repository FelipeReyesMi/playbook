const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
 ]


console.log("Nombre de los Explorers: \n")
explorers.forEach((explorers) => console.log(explorers.name)); ///// Hace un recorrido en la lista y busca lo que estas buscando en especifico
console.log("")
////////////////////////////////////////////////////////
console.log("stack de cada explorer con FOR EACH \n")
explorers.forEach((item) => console.log(item.stack));
console.log("")
////////////////////////////////////////////////////////
console.log("stack de cada explorer con MAP \n")
const explorers_stacks = explorers.map((my_explorer_in_list) => my_explorer_in_list.stack); //Va a crear una nueva lista a partir de la lista que esta declarada para asi poder extraer la informacion
console.log(explorers_stacks + "\n");
////////////////////////////////////////////////////////
console.log("lista de explorers que tengan en su stack js usando FILTER \n")
const explorer_with_js = explorers.filter((my_explorer_in_list) => my_explorer_in_list.stack.includes('js'));
console.log(explorer_with_js);
////////////////////////////////////////////////////////
console.log("primer explorer que sea de la CDMX usando FIND \n")
const firs_explorer_in_CDMX = explorers.find((my_explorer_in_list) => my_explorer_in_list.city === "CDMX");
console.log(firs_explorer_in_CDMX);
////////////////////////////////////////////////////////
console.log("suma de todos los exercises_completed usando REDUCE \n")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0);
console.log(all_exercises);
////////////////////////////////////////////////////////
console.log("\n validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true \n")
const explorer_exercisesFinished = explorers.some((my_explorer_in_list) => my_explorer_in_list.missions.frontend.exercisesFinished === true );
console.log(explorer_exercisesFinished );
////////////////////////////////////////////////////////
console.log("\n validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true \n")
const explorer_isFinished = explorers.every((my_explorer_in_list) => my_explorer_in_list.missions.onboarding.isFinished === true );
console.log(explorer_isFinished );