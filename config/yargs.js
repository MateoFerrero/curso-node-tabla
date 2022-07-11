const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 5,
                        describe: 'Es el limite hasta donde llega'
                    },
                    's': {
                        alias: 'suma',
                        type: 'boolean',
                        describe: 'Muestra la suma de todos los números'
                    },
                    'p': {
                        alias: 'pares',
                        type: 'boolean',
                        describe: 'Te devuelve la cantidad de resultados pares'
                    }
                })
                .check((argv, options) => {
                    if (isNaN(argv.base)) {
                        throw 'Base tiene que ser un número'
                    }

                    return true;
                })
                .argv;


module.exports = argv;