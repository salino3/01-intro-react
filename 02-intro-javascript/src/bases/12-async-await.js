/*
 video 24 async, await, API


*/



const getImagenPromesa = () => 
new Promise(resolve => resolve('https://google.com'))
//
getImagenPromesa().then(console.log)


const getImagen = async () => {

try {
      const apiKey = "L8JxgvmaN4vEFRGt2LkpHGjWUe9djsqK";

      const respuesta = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await respuesta.json();
      console.log(data);

      const { url } = data.images.original;

      const imagen2 = document.createElement("img");
      imagen2.src = url;
      document.body.appendChild(imagen2);
} catch (err) {
  console.error(err)
}



}



getImagen()














