const express = require('express')
const route = express.Router()
const { userExists } = require('../../helpers/userExists')
const { users } = require('../../mockups/users')
const { updateUser } = require('../../controllers/users')


route.get('/users/:id?', (req, res) => {
    const id = parseInt(req.params.id)
    if (!id) return res.status(200).json(users)
    if (!userExists(parseInt(id))) return res.status(404).json('The user not exists.')
    return res.status(200).json(users.find(user => user.id === id))
})

route.post('/users', (req, res) => {
    const { name } = req.body
    if (!name) return res.status(400).json('The name field is required')
    if (typeof name !== 'string') return res.status(400).json('The name must be a string.')
    if (userExists(name)) return res.status(400).json('User already exists.')
    users.push({
        id: users.length + 1,
        name
    })
    return res.status(200).json(users[users.length - 1])

})

route.put('/users/', updateUser)

route.delete('/users/:id', (req, res) => {
    let user = userExists(req.params.id)
    if (!user) {
        res.status(404).send('El user no fue encontrado')
        return
    }

    const index = users.indexOf(user)
    users.splice(index, 1)

    res.send(users)
})

module.exports = route