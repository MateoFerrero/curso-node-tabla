const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();


// console.log(argv);


//const num = 3;


// const [ ,  , arg3 = 'base=5'] = process.argv;
// const [, num = 3] = arg3.split('=');



crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'CREADO'))
    .catch(err => console.log(err));
