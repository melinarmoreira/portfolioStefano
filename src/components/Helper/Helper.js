import {React} from "react";

export const portfolio = [

   {
      id: 1,
      categoria: "podcast",
      imagen: "",
      url: "",
      descripcion: "podcast"
    },
    {
      id: 2,
      categoria: "comunicacion",
      imagen: "",
      url: "",
      descripcion: "comunicacion"
    },
    {
      id: 3,
      categoria: "locucion",
      imagen: "",
      url: "",
      descripcion: "locucion"
    },
    {
      id: 4,
      categoria: "disenio",
      imagen: "",
      url: "",
      descripcion: "diseño"
    },
    {
      id: 5,
      categoria: "podcast",
      imagen: "",
      url: "",
      descripcion: "podcast"
    },
    {
      id: 6,
      categoria: "comunicacion",
      imagen: "",
      url: "",
      descripcion: "comunicacion"
    },
    {
      id: 7,
      categoria: "locucion",
      imagen: "",
      url: "",
      descripcion: "locucion"
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
