class User{
    constructor(id,username,name,bio){
        this.id = id,
        this.username = username,
        this.name = name,
        this.bio = bio,
        this.dateCreated = new Date(),
        this.lastUpdate = new Date()//Metodo Date() nos da la fecha del dia en el que se ejecuta
    }
}

module.exports = User