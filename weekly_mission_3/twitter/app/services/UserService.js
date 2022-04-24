const persona = require('./../models/User')

class UserService {
    static create(id, username, name){
      return new persona(id, username, name, "Sin bio")
    }
  }
module.esports = UserService