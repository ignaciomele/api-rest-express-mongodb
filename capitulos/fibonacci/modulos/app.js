/*const datos = require('./datos')     

datos('Hola mundo')      

console.log(module)       

const path = require('path')

const objPath =path.parse(__filename)
console.log(objPath.name) 

const os = require('os')
var memoriaLibre = os.freemem()
var memoriaTotal = os.totalmem()

console.log(`'memoria libre: ${memoriaLibre}'`)
console.log(`'memoria libre: ${memoriaTotal}'`)

const fs = require('fs')

//const archivos = fs.readdirSync('./')
//console.log(archivos)

fs.readdir('./', (err, files) => {
    if(err) console.log('error', err)
    else console.log('resultado', files)
})

const eventEmitter = require('events')
const emitter = new eventEmitter()

//Registrar el listener     para hacerlo usamos .on
emitter.on('mensajeLoger', (arg) => {
    console.log('Listener llamado...', arg)
})

//Registrar el evento
emitter.emit('mensajeLoger', {id:1, url:'http://prueba.com'})

const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hola mundo')
        res.end()
    }

    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse', 'teclado', 'parlante']))
        res.end()
    }
})

server.listen(3000)

console.log('server listening on port 3000') */