const user = {
    username: "Rogelio Chavez",
    nickname: "Royer",
    profilePicture: "photo7894_20200410",
    coverPhoto: "picture_7845",
    getUsername: function(){ //Declaracion de la funcion
      return `The user is ${this.username} with nickname of ${this.nickname}`
    },
    getPhotos: function(){ //Declaracion de la funcion
      return `the profile picture of ${this.username} is  ${this.profilePicture}`
    }
   }
   console.log("\nUsers \n")
   console.log(user.getUsername())
   console.log(user.getPhotos())
   console.log("")
///////////////POST////////////

const post = {
    whoPublished: "Jessica Martz",
    dateTime: "12h",
    description: "Aqui en Vacaciones",
    picture: "photo12_7845",
    likes: 65,
    comment: 10,
    share: 1,
    getUsername: function(){ //Declaracion de la funcion
        return `${this.whoPublished} publish the ${this.picture} ${this.dateTime} ago`
      },
      getDescription: function(){ //Declaracion de la funcion
        return `The description is "${this.description}", have ${this.likes} Likes and ${this.comment} comments`
      }
   }
   console.log("\nPost \n")
   console.log(post.getUsername())
   console.log(post.getDescription())
   console.log("")

///////////////BIOGRAPHY////////////

const biography = {
    work: "Manager of Facebook",
    education: "UAEMEX",
    placesLived: "Estado de México",
    contactInfo: "jessicamartz@gmail.com",
    RelationShip: "Single",
    getRelation: function(){ //Declaracion de la funcion
      return `Their relationship is "${this.RelationShip}", lives in the ${this.placesLived}`
    },
    getSchool: function(){ //Declaracion de la funcion
      return `Their School is "${this.education}" and work in "${this.work}"`
    }
   }
   console.log("\nBiography \n")
   console.log(biography.getRelation())
   console.log(biography.getSchool())
   console.log("")