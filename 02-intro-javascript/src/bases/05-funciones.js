/* 
video 17 funciones
//* buena práctica crear funciones hacerlo desde constantes, para no confundirse
/// modificando variables durante el proyecto
//* el objeto implícito de la función serìa lo que devuelve en las parentesis

*/

const saludar = function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}!`;
};

const saludar3 = (nombre) => `Hola, ${nombre}!`;

const saludar4 = () => `Hola a todos!`;



//console.log(saludar('Goku'))

console.log(saludar2("Vegeta"));
console.log(saludar3("Bulma"));
console.log(saludar4());
//

// otra sintaxis
const getUser = () => ({
       uid: 'ABC123',
       username: 'Carmelo'
    });


const user = getUser();
console.log(user)


// Tarea (hecho)
// 1. transformarla en función flecha
// 2. tiene que retornar un objeto implícito
// 3. testearlo
const getUsuarioActivo = (nombre) => ({
    uid: 'AC1234',
    username: nombre
 })

const usuarioActivo = getUsuarioActivo('Roberto')
console.log(usuarioActivo)





