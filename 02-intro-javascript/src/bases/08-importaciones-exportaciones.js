/* 
video 20 import, export


*/


import heroes from '../data/heroes';

// usando filter() y map()
const personaje = heroes.filter((x) => x.id === 2)
const personajeName = personaje.map((z) => z.name);

console.log(personajeName);// -> Spiderman

//console.log(heroes)


//* usando 'find()'
const getHeroeBId = (id) =>
 heroes.find((heroe) => heroe.id === id);

console.log(getHeroeBId(5));// -> cualquier personaje según su 'id'

//* usando aún filter()
const GetHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(GetHeroesByOwner('DC'));

