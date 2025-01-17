class User {
    constructor(id, username, name, bio) {
        this.id = id,
            this.username = username,
            this.name = name,
            this.bio = bio,
            this.dateCreated = new Date(),
            this.lastUpdate = new Date() //Metodo Date() nos da la fecha del dia en el que se ejecuta
    }

    //Creacion de los getters 
    get getUsername() {
        return this.username
    }

    get getBio() {
        return this.bio
    }

    get getDateCreated() {
        return this.dateCreated
    }

    get getLastUpdate() {
        return this.lastUpdate
    }
    //Creacion de los setters
    set setUsername(newUsername) {
        this.username = newUsername
    }
    set setBio(newBio) {
        this.bio = newBio
    }

}

module.exports = User