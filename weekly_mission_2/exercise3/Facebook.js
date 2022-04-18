class user {
    //Declaracion de la clase user
    constructor() {
        //Contructor de la clase user

        this.username = "Rogelio Chavez",
            this.nickname = "Royer",
            this.profilePicture = "photo7894_20200410",
            this.coverPhoto = "picture_7845"
    }
    facebook() {
        //Declaracion del metodo facebook
        return `The user is ${this.username} with nickname of ${this.nickname}`
    }
    photos() {
        //Declaracion del metodo photos
        return `the profile picture of ${this.username} is  ${this.profilePicture}`
    }
}

const datos = new user(); // Objeto datos de la clase user()
console.log("\nUsers \n")
console.log(datos.photos())
console.log(datos.facebook())
console.log("")
//////////////////////ISSUE//////////////////////////////

class post { //Creacion de la clase post
    constructor() {
        this.whoPublished = "Jessica Martz",
            this.dateTime = "12h",
            this.description = "Aqui en Vacaciones",
            this.picture = "photo12_7845",
            this.likes = 65,
            this.comment = 10,
            this.share = 1
    }
    author() { //Declaracion del metodo author
        return `${this.whoPublished} publish the ${this.picture} ${this.dateTime} ago`
    }
    info() { //Declaracion del metodo info
        return `The description is "${this.description}", have ${this.likes} Likes and ${this.comment} comments`
    }
}
const publicacion = new post(); // Objeto publicacion de la clase post()
console.log("\nPost \n")
console.log(publicacion.author())
console.log(publicacion.info())
console.log("")
//////////////////////ISSUE//////////////////////////////

class biography {
    constructor() {
        this.work = "Manager of Facebook",
            this.education = "UAEMEX",
            this.placesLived = "Estado de México",
            this.contactInfo = "jessicamartz@gmail.com",
            this.RelationShip = "Single"
    }

    relation() { //Declaracion del metodo
        return `Their relationship is "${this.RelationShip}", lives in the ${this.placesLived}`
    }
    school() { //Declaracion de la funcion
        return `Their School is "${this.education}" and work in "${this.work}"`
    }
}

const descripcion = new biography() // Objeto descripcion de la clase biography()
console.log("\nBiography \n")
console.log(descripcion.relation())
console.log(descripcion.school())
console.log("")