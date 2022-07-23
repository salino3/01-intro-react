/* 
 video 18 Desestructuración
//* Asiñasción Desestructurante

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar 
valores de arreglos o propiedades de objetos en distintas variables.

un ejemplo
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
/// expected output: 10

console.log(b);
/// expected output: 20

[a, b, ...rest] = [10, 25, 30, 40, 50];

console.log(b);
/// expected output: 25

console.log(rest);
/// expected output: Array [30,40,50]



*/

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
     rango: 'Soldato'
}

// esa sintaxis dice: extrae el contenido dentro las llaves desde ese objeto
// creando una o mas variables.
// si quiero puedo renombrar esa nueva variable://*  const {nombre: nombre2} = persona; // console.log(nombre2);
// puedo también extraer un objeto que contiene otros objetos
const { edad, nombre, clave } = persona;// -> nombre = persona.nombre

console.log(persona.nombre);
console.log(nombre);
console.log(edad);
console.log(clave);

const Context = ({clave, nombre, edad, rango='Capitán', peso=60}) => {
//   console.log(edad, nombre, rango);

return {
    nombreClave: clave,
    años: edad,
    peso: peso,
    rangoDesdeReturn: rango,
    latitudLongitud: {
         lat: 14.2343,
         lon: -12.5453
    }
 }
}


const avenger = Context(persona);

const { nombreClave, años, rangoDesdeReturn, latitudLongitud:{lat, lon}, peso } = avenger;

console.log("datos ejercicio: ", nombreClave, años, rangoDesdeReturn, peso);
console.log("objeto completo avenger: ", avenger);
console.log("latitud y longitud: ", lat, lon);








