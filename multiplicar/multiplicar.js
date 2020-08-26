const fs = require('fs');
const { resolve } = require('path');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            resolve(`tabla-${base}.txt`);
        });
    })

}

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base * i}\n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}