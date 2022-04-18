const user = {
    user: "Cassandra",
    username: "@Casss45",
    age: "22",
    birthday: "2000-07-20",
    followers: 1990,
    following: 653,
    Tweets: "@Claud35",
    hashtag: "#frijoleid",
    getTotalFollowers: function(){ //Declaracion de la funcion
      return this.followers 
    },
    getUsernameBirthday: function(){ //Declaracion de la funcion
      return `The user ${this.username} was born on ${this.birthday}`
    }
   }
   console.log("\nUsers \n")
   console.log("@Cass45 has " + user.getTotalFollowers() + " followers")
   console.log(user.getUsernameBirthday())
   console.log("")
////////////////////////////////////////////////////////
const trending_topic = {  //Declaracion del objeto
  title: "Aldame",
  tweets: "1,563,212",
  time:"16:25:15",
  description: "Patadas de Bicicletas",
  whoPublished: "@Kappah20",
  getTrendingTopic: function(){ //Declaracion de la funcion
    return this.title + " " + this.time 
  },
  getUsernameBirthday: function(){ //Declaracion de la funcion
    return `${this.whoPublished} public, ${this.description}`
  }
}
console.log("\nTrending_topic \n")
console.log(trending_topic.getTrendingTopic())
console.log(trending_topic.getUsernameBirthday())
console.log("")
////////////////////////////////////////////////////////
const hashtag = {
  name : "Ucrania",
  whoPublished: "@AMLO_oficial",
  tweets: "50,722,120",
  date: "2022-04-15",
  getNameHashtag: function(){ //Declaracion de la funcion
    return `#${this.name} was published on ${this.date}` 
  },
  getTweets: function(){ //Declaracion de la funcion
    return `The user ${this.whoPublished} use  #${this.name}`
  }
}
console.log("\nHashtag \n")
console.log(hashtag.getNameHashtag())
console.log(hashtag.getTweets())
console.log("")