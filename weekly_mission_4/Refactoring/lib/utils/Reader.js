const fs = require("fs");


class Reader {

    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
const lista = Reader.readJsonFile("explorers.json")
console.log(lista)
module.exports = Reader