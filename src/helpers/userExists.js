const { getUsers } = require('../mockups/users')

const userExists = idOrName => !!getUsers().find(user => user[typeof idOrName === 'number' ? 'id' : 'name'] === idOrName)

exports.userExists = userExists
