const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();


// console.log(argv);


//const num = 3;


// const [ ,  , arg3 = 'base=5'] = process.argv;
// const [, num = 3] = arg3.split('=');



crearArchivo( argv.b, argv.l, argv.h, argv.s )
    .then(nombreArchivo => console.log(nombreArchivo.green, 'CREADO'.green))
    .catch(err => console.log(err));
