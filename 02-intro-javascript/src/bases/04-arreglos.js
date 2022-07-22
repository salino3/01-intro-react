/* 
video 16 arreglos: colección de informaciones a dentro de una misma variable;

* CALLBACK: una functión que se ejecuta a dentro de un método
* el operador 'spread' ... , los tres puntos

*/

// const arreglo = new Array(100);// espacios disponibles del array
// arreglo.push(1);// añadiendo 1 más

const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);


// usando operador 'spread', los tres puntos
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
  return numero * 2
})

console.log('arreglo:', arreglo);
console.log("arreglo2: ", arreglo2);
console.log("arreglo3: ", arreglo3);




