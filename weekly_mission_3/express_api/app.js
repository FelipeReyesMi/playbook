// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//HTTP METHODS
app.get('/v1/explorers', (req,res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1,name:"Felipe 1"}
    const explorer2 = {id: 2,name:"Felipe 2"}
    const explorer3 = {id: 3,name:"Felipe 3"}
    const explorer4 = {id: 4,name:"Felipe 4"}
    const explorer5 = {id: 5,name:"Felipe 5"}
    const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]
    res.status(200).json(explorers)
})
//Get Explorer mediante ID
app.get('/v1/explorers/:id', (req,res) => {
    console.log(`Api Explorers GET requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1,name:"Felipe"}
    
    res.status(200).json(explorer)
})

//POST crear un explorer

app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST requests ${new Date()}`)
    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})