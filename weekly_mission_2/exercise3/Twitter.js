class user {
    //Declaracion de la clase repo
    constructor() {
        //Contructor de la clase repo
        this.name = "LaunchX",
        this.user = "Cassandra",
        this.username = "@Casss45",
        this.age = "22",
        this.birthday = "2000-07-20",
        this.followers = 1990,
        this.following = 653,
        this.Tweets = "@Claud35",
        this.hashtag = "#frijoleid"
    }
    totalFollowers() {
        //Declaracion del metodo totalIssues
        return this.followers
    }
    usernameBirthday() {
        //Declaracion del metodo generalInfo
        return `The user ${this.username} was born on ${this.birthday}`
    }
}

const twitter = new user(); // Objeto user de la clase repo()
console.log("\nUsers \n")
   console.log("@Cass45 has " + twitter.totalFollowers() + " followers")
   console.log(twitter.usernameBirthday())
   console.log("")
//////////////////////ISSUE//////////////////////////////

class Issues { //Creacion de la clase Issues
    constructor() {
        this.Title = "website",
            this.repositoryNameAssociated = "FernandoGi",
            this.status = "Commit",
            this.numberOfCommits = 10,
            this.labels = 5,
            this.author = "FelipeReyes",
            this.dateCreated = "2022-02-15",
            this.lastUpdate = "2022-03-02"
    }
    titleAndAuthor() { //Declaracion del metodo titleAndAuthor
        return `The repository "${this.Title}" was created by ${this.author} `
    }
    generalInfo() { //Declaracion del metodo generalInfo
        return `This repository was created by ${this.author} and ${this.repositoryNameAssociated}`
    }
}
const issue = new Issues(); // Objeto issue de la clase Issues()
console.log(issue.titleAndAuthor())
console.log(issue.generalInfo())
console.log("La fecha de creación del repositorio es: " + issue.dateCreated)
console.log("")
//////////////////////ISSUE//////////////////////////////

class PullRequest {
    constructor() {
        this.Title = "Weekly_mission_3",
            this.branchName = "Innovaccion Virtual",
            this.dateCreated = "2020-04-18",
            this.status = "Commit",
            this.repositoryNameAssociated = "carlosgilmar"
    }

    stat() { //Declaracion del metodo
        return `The status of the repository is ${this.status}`
    }
    titleAndAutor() { //Declaracion de la funcion
        return `The repository "${this.Title}" was created by ${this.repositoryNameAssociated}`
    }
}

const request = new PullRequest() // Objeto issue de la clase Issues()
console.log(request.stat())
console.log(request.titleAndAutor())