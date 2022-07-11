const fs = require('fs'); //Paquetes requeridos => File System
const colors = require('colors');

const crearArchivo = async( base = 4, listar = false, hasta = 5 ) => {

    try {
        let salida = '';
        let mostrar = '';

        for (let i = 1; i <= hasta; i++){
            mostrar += `${base} x ${i} = ${base*i}\n`.green;
            salida +=  `${base} x ${i} = ${base*i}\n`;
        }

        if (listar == true) {
            console.log(mostrar);   
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;        
    }

          
}


module.exports = {
    crearArchivo
}