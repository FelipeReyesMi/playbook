const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo")
const juan = new MissionCommander("Juan")
const julieta = new MissionCommander("Julieta")
const ana = new MissionCommander("Ana")
console.log(carlo.name + ", "+ juan.name + ", " + julieta.name + " y " + ana.name)