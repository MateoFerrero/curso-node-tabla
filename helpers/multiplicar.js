const fs = require('fs'); //Paquetes requeridos => File System
const colors = require('colors');

const crearArchivo = async( base = 4, listar = false, hasta = 5, suma = false, pares = false ) => {

    try {
        let salida = '';
        let mostrar = '';
        let sumado = 0;
        let sumapares = 0;


        for (let i = 1; i <= hasta; i++){
            salida +=  `${base} x ${i} = ${base*i}\n`;
            mostrar += `${base} x ${i} = ${base*i}\n`.green;

            sumado += base * i;

            if ((base * i) % 2 == 0) {
                sumapares += 1;
            }
        }

        if (listar == true) console.log(mostrar);
        if(suma == true) console.log(`La suma de todo da: ${sumado}`.green); 
        if(pares == true) console.log(`Cantidad de números pares: ${sumapares}`.green);



        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;        
    }
}


module.exports = {
    crearArchivo
}