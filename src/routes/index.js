const express = require('express')
const route = express.Router()

route.use('/api', require('./API/'))

route.get('/', (req, res) => {
    res.send('Hola mundo desde express')
})


module.exports = route