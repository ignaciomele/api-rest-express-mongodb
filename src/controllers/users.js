const { userExists } = require('../helpers/userExists')
const { getUsers, updateUsers } = require('../mockups/users')

const updateUser = (req, res) => {
    const { name, newName } = req.body
    if (!name || !newName) return res.status(400).json('The fields are required')
    if (typeof name !== 'string' && typeof newName !== 'string') return res.status(400).json('The fields must be a string.')
    if (userExists(newName)) return res.status(400).json('The new name already exists.')
    if (!userExists(name)) return res.status(400).json("We couldn't find the user.")
    const newArr = getUsers().map((user, idx) => {
        if (user.name === name) return {
            ...getUsers()[idx],
            name: newName
        }
        return user
    })
    updateUsers(newArr)
    return res.status(200).json(getUsers().find(user => user.name === newName))
}

exports.updateUser = updateUser