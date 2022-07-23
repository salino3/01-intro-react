
/*
 video 22 promesas

*/
import { getHeroeBId, owners } from "../bases/09-part2-import-export";
console.log(owners);


const promesa = new Promise((resolve, reject) => {
  
    setTimeout(() => {
    
 const heroe2 = getHeroeBId(2)
   resolve(heroe2);

    }, 2000)
});

promesa.then((value) => {
    console.log('héroe desde new promise', value)
}).catch(err => console.warn(err) );



//* repeat code
const getHeroeByIdAsync = (id) => {
  
    return  new Promise((resolve, reject) => {

      setTimeout(() => {

        const heroe2 = getHeroeBId(id);
    if (heroe2) {
      resolve(heroe2);
    } else {
      reject(heroe2);
    }
      
 }, 2000);
    });

}

getHeroeByIdAsync(1)
  .then((heroe3) => { console.log("Heroe: ", heroe3);})// se puede sostituir simplemente con 'console.log'
  .catch((err) => console.warn("no se pudo encotrar el héroe", err));



