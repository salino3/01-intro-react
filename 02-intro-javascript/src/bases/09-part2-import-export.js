/* 
video 21 import, export desde la lista, varias maneras


*/


import heroes, {owners} from '../data/heroes';


console.log(owners)
//console.log(heroes)


//* usando 'find()'
const getHeroeBId = (id) =>
 heroes.find((heroe) => heroe.id === id);

console.log(getHeroeBId(5));// -> cualquier personaje según su 'id'

//* usando aún filter()
const GetHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(GetHeroesByOwner('DC'));

