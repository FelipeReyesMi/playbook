const UserView = require('./../../app/view/UserView')

describe("Test for UserView", () =>{

    test("Return an error objet when try to create a new user with an null", () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })
})