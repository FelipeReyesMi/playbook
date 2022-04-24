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
    });

    test("3. Update username", () => {
        const user = UserService.create(1, "FelipeReyesMi", "Felipe")
        UserService.updateUsername(user,"felipere")
        expect(user.username).toBe("felipere")
    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "FelipeReyesMi1", "Felipe")
        const user2 = UserService.create(1, "FelipeReyesMi2", "Felipe")
        const user3 = UserService.create(1, "FelipeReyesMi3", "Felipe")
        const username = UserService.getAllUsernames([user1,user2,user3])
        expect(username).toContain("FelipeReyesMi1")
        expect(username).toContain("FelipeReyesMi2")
        expect(username).toContain("FelipeReyesMi3")
    });

})