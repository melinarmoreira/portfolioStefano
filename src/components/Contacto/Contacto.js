import React from 'react'
import './Contacto.scss'
import imgContacto from '../../img/contacto/contacto.png'
export const Contacto = () => {
  return (
    <div id='contacto'>
        <div id='img-content'>
            <img src={imgContacto} alt="imagen de cartas" />
        </div>
        <form action="" id='formulario'>
            <h4>CONTACTO</h4>
            <h5>¡Escríbeme y te contestaré lo antes posible!</h5>
            <input type="text" placeholder='Escribe tu nombre' />
            <input type="email" placeholder='Escribe tu correo' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Escribe tu mensaje...' />
            <input type="submit" value={'ENVIAR'} id="submit"/>
        </form>
    </div>
  )
}
