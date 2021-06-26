const fs = require('fs')

let crearSerie = (cantidad) =>{

    return new Promise((resolve, reject) => {
        let fibo1 = 1
        let fibo2 = 1
        let serie = ''
        
        serie += `${fibo1}\t`
        
        for(let i=2;i <= cantidad-1;i++) {
            serie += `${fibo2}\t`
            fibo2 = fibo1 + fibo2
            fibo1 = fibo2 - fibo1
        }
        
        fs.writeFile('fibonacci.txt', serie, (err) => {
            if (err) 
                reject('Error al crear el archivo')
            else
                resolve('el archivo fue creado con exito')
        })
    })

}

module.exports = {
    crearSerie,
    //otro método
}

