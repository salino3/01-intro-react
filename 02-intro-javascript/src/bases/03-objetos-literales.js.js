/* 
video 15 objetos literales
*/

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 55645234,
    latitud: 14.32345,
    longitud: 34.453621
  }

};
// muestra una tabla en consola
//console.table(persona);

// mala manera de clonar una variable
console.log(persona);

const persona2 = persona;

console.log(persona2)
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
// mala manera de clonar una variable

const persona3 = {...persona};
persona3.nombre = "Mike";

console.log(persona);
console.log(persona3);








