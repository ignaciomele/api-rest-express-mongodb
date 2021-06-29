const debug = require('debug')('app:inicio')
//const dbDebug = require('debug')('app:db')
const express = require('express')
const config = require('config')
// const logger = require('./logger')
const morgan = require('morgan')
const Joi = require('joi');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

//CONFIGURACION DE ENTORNOS
console.log('Aplicacion: '+ config.get('nombre'))
console.log('BD server :' + config.get('configDB.host'))

//uso de un middleware de tercero = morgan
if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    //console.log('morgan habilitado')
    debug('morgan esta habilitado')
}

//Trabajos con la base de datos
debug('conectando con la base de datos')


//app.use(logger)
// app.use(function(req, res, next) {
//     console.log('autenticando...')
//     next()
// })

// Routes
app.use('/', require('./routes/'))


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
