/* 
 video 14
*/

const nombre = 'Elisa';
const apellido = 'Lara';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hola
${nombre}
${apellido} ${1 + 3}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo('Matteo')}`)






