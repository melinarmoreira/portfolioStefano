import React from 'react'
import './Contacto.scss'
import imgContacto from '../../img/contacto/contacto.png'
import emailjs from "emailjs-com";

export const enviarMail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_r257kpc', 'template_7yufk5s', e.target, 'CQfVZAB_SCTCj6ElT').then(res=>{
    alert("¡Gracias por tu mensaje! Te contestare a la brevedad");
  })
}

 export const Contacto = () => {
  return (
    <div id='contacto'>
        <div id='img-content'>
            <img src={imgContacto} alt="imagen de cartas" />
        </div>
        <div id='formulario-content'></div>
        <form action="" id='formulario' onSubmit={enviarMail}>
          <h4>CONTACTO</h4>
          <h5>¡Escríbeme y te contestaré lo antes posible!</h5>
          <input type="text" placeholder='Escribe tu nombre' name="nombre"/>
          <input type="email" placeholder='Escribe tu correo' name="email" />
          <textarea id="" cols="30" rows="10" placeholder='Escribe tu mensaje...' name="mensaje"/>
          <input type="submit" value={'ENVIAR'} id="submit"/>
        </form>    
    </div>
  )
}
