const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "FelipeReyesMi", "Felipe")
        expect(user.username).toBe("FelipeReyesMi")
        expect(user.name).toBe("Felipe")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

})