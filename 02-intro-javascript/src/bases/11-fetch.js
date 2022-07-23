/*
 video 23 fetch API

 La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). 
 Resultará familiar a cualquiera que haya usado XMLHttpRequest

*/

const apiKey = 'L8JxgvmaN4vEFRGt2LkpHGjWUe9djsqK';

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion.then(resp => resp.json() )
.then(( {data}) => {
   const { url } = (data.images.original);
   console.log(url);

   const imagen = document.createElement('img');
   imagen.src = url;

   document.body.appendChild(imagen);


})
.catch( console.warn);





