// import { Broda } from "../../img/portfolio/broda.png";
// import { Amores } from "../../img/portfolio/amores-inmigrantes.png";
// import { Psiconectados } from "../../img/portfolio/psiconectados.png";
// import { Virulos } from "../../img/portfolio/virulos.png";
// import {useEffect, useState} from "react";
// import {db} from "../../firebase/FirebaseConfig";
// import { getDocs, collection } from "firebase/firestore";





 export const portfolio = [

   {
      id: 1,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/11/broda.jpg",
      url: "https://grama.media/contenido/podcast/broda-podcast/",
      descripcion: "Broda"
    },
    {
      id: 2,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/11/aqmores.jpg",
      url: "https://grama.media/contenido/podcast/amores-inmigrantes/",
      descripcion: "Amores Inmigrantes"
    },
    {
      id: 3,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/11/4019863-1585080565354-db8526a873b31.jpg",
      url: "https://grama.media/contenido/podcast/virulos/",
      descripcion: "Virulos"
    },
    {
      id: 4,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/11/psic.jpg",
      url: "https://grama.media/contenido/podcast/psiconectados-podcast/",
      descripcion: "Psiconectados"
    },
    {
      id: 5,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/11/17820842-1631132051318-2b138254752d9.jpg",
      url: "https://grama.media/contenido/podcast/hojas-podcast/",
      descripcion: "Hojas"
    },
    {
      id: 6,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/12/Doble-Check-portada.jpg",
      url: "https://grama.media/contenido/podcast/doblecheck/",
      descripcion: "Doble check"
    },
    {
      id: 7,
      categoria: "podcast",
      imagen: "https://grama.media/wp-content/uploads/2021/11/Sista_Anchor-1.jpg",
      url: "https://grama.media/contenido/podcast/sista-podcast/",
      descripcion: "Sista"
    },
    {
      id: 8,
      categoria: "disenio",
      imagen: "",
      url: "",
      descripcion: "diseño"
    },


]
   
    

export const promesa = new Promise ((resolve, reject) =>{

   let respuesta = true;
   if (respuesta) {
       setTimeout (() => { 
           resolve(portfolio);
       }, 1000)
       
   } else{
       reject('error')
   }
});



