const UserView = require('./../../app/view/UserView')

describe("Test for UserView", () =>{

    test("Return an error objet when try to create a new user with an null", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });

    test("Return an error objet when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("Return an error objet when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("Create a user by a given valid payload", () => {
        const payload = {username: "Username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("Username")
        expect(result.id).toBe(1)
    });

})