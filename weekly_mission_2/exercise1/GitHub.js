const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   console.log("")
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log("")
//////////////////////ISSUE//////////////////////////////
   const Issue = {
    Title: "website",
    repositoryNameAssociated: "FernandoGi",
    status: "Commit",
    numberOfCommits: 10,
    labels: 5,
    author: "FelipeReyes",
    dateCreated: "2022-02-15",
    lastUpdate: "2022-03-02",
    getTitleAndAuthor: function(){
      return `The repository ${this.Title} was created by ${this.author} `
    },
    getGeneralInfo: function(){
      return `This repository was created by ${this.author} and ${this.repositoryNameAssociated}`
    }
   }

   console.log(Issue.getTitleAndAuthor())
   console.log(Issue.getGeneralInfo())
   console.log("La fecha de creación del repositorio es: " + Issue.dateCreated)
   console.log("")
   //////////////////////ISSUE//////////////////////////////

   const PullRequest = {
    Title: "Weekly_mission_3",
    branchName: "Innovaccion Virtual",
    dateCreated: "2020-04-18",
    status: "Commit",
    repositoryNameAssociated: "carlosgilmar",
    getStatus: function(){
      return `The status of the repository is ${this.status}`
    },
    getTitleAndAutor: function(){
      return `The repository ${this.Title} was created by ${this.repositoryNameAssociated}`
    }
   }

   console.log(PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAutor())
 