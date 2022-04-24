const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "FelipeReyesMi", "Felipe")
        expect(user.username).toBe("FelipeReyesMi")
        expect(user.name).toBe("Felipe")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "FelipeReyesMi", "Felipe")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("FelipeReyesMi")
        expect(userInfoInList[2]).toBe("Felipe")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

})