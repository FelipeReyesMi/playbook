const Reader = require("./lib/utils/Reader")
const explorers = Reader.readJsonFile("explorers.json")
const ExplorerService = require("./lib/services/ExplorerService")


console.log(ExplorerService.filterByMission(explorers, "node"));
console.log( "Hay " + ExplorerService.getAmountOfExplorersByMission(explorers, "node") + " explorers en el curso");
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))
