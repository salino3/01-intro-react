/*
 video 25  operador condicional ternario ? :
*/

const activo = true;

let mensaje = '';

if (activo) {
    mensaje = 'Activo'
} else {
    mensaje = 'Inactivo'
}

const mensaje2 = activo ? "Activo" : "Inactivo";
const mensaje3 = !activo ? "Activo" : null;

const mensaje4 = activo && 'Acitvo'

console.log("1º mensaje: ", mensaje);
console.log("2º mensaje: ", mensaje2);
console.log("3º mensaje: ", mensaje3);
console.log("4º mensaje: ", mensaje4);



