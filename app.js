const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

// console.log(argv); 

// console.log(argv.base); 

// const base = 2;

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'.green))
    .catch(err => console.log(err))
    