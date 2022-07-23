/* 
video 19 Desestructuración
//* Asiñasción Desestructurante

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar 
valores de arreglos o propiedades de objetos en distintas variables.




*/


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,, p3] = personajes;
console.log(p3);// Trunks


const retornaArreglo = () => {
    return ['ABC', 123 ];
}

const [letras, numeros] = retornaArreglo();
 
console.log(letras, numeros)


const UseState = (valor ) => {
    return [valor, () => {console.log('Hola mundo') } ];
}


// en la desestructuración se puede crear una función sin parentesis, debido que la segunda posición es una función, y después se puede utilizar como una normal función
const [nombre, setNombre ] = UseState('Fran');

console.log(nombre)

 setNombre();
