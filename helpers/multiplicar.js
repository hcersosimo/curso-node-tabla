const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base, listar, hasta) => {

    try {
        
        
        let salida='';
        let archivo='';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } ${'X'.green} ${ i } ${'='.green} ${ base * i}\n`;
            archivo += `${ base } X ${ i } = ${ base * i}\n`;
        }
        
        if (listar) {
            
            console.log ('======================'.green);
            console.log ('     Tabla del:'.green, colors.blue(base));
            console.log ('======================'.green);
            console.log(salida);
        
        }
    
        fs.writeFileSync( `./salida/tabla-${ base}.txt`, archivo);
        
        return `tabla-${ base}.txt`;

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
}