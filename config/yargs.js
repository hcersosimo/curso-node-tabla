const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type:'number',
                demandOption: true,
                description: 'Base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                description: 'lista la tabla de multiplicar por consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                description: 'numero hasta de la tabla de multiplicar por consola'
            })
            .check( (argv, options) => {
                if ( isNaN(argv.b) ) {
                    throw 'La base debe ser un número'
                }
                if (isNaN(argv.h)){
                    throw 'hasta debe ser un número'
                }
                else
                    return true
            })
            .argv;

module.exports = argv;