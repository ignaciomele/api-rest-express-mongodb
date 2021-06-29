
let users = [
    { id: 1, name: 'Nacho' },
    { id: 2, name: 'Pepe' },
    { id: 3, name: 'Ana' }
]

const getUsers = () => users

const updateUsers = newUsers => {
    users = newUsers
    console.log(users)
}

exports.getUsers = getUsers
exports.updateUsers = updateUsers