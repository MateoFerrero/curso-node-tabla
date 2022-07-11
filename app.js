const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();



crearArchivo( argv.b, argv.l, argv.h, argv.s, argv.p )
    .then(nombreArchivo => console.log(nombreArchivo.green, 'CREADO'.green))
    .catch(err => console.log(err));
