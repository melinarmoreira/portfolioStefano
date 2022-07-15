import React, { useState } from 'react'
import './NavBar.scss'
import { FiMenu, FiX } from "react-icons/fi";
import logoStefano from "../../img/logo/logo-stefano.png"
export const NavBar = () => {
    const [scroll, setScroll] = useState(false)

    function toggleScroll(){
        setScroll(!scroll)
        scroll?
            document.body.style.overflow = "visible"
        :
            document.body.style.overflow = "hidden"
    }
    function closeMenu(){
        toggleScroll()
        document.querySelector('.toggle-check').click();
    }
    
  return (
    <div id="nav-bar">
        <div id="profile">
            <a href="#home">
                <img src={logoStefano} alt="Stefano Sotelo" />
            </a>
        </div>
        <div id="menu-container">
            <input type="checkbox" class="toggle-check" id="toggle" name='checkbox' hidden/>
            <label class='toggle' for="toggle" onClick={()=>toggleScroll()}><FiMenu id='toggle'/></label>
            <div id="menu-slide">
                <nav>
                    <label class="toggle-menu" for="toggle" onClick={()=>toggleScroll()}><FiX id='toggle-menu' /></label>
                    <ul>
                        <li><a class="options-menu" onClick={()=>closeMenu()} href="#sobre-mi-content">Sobre Mi</a></li>
                        <li><a class="options-menu" onClick={()=>closeMenu()}  href="#portfolio">Portfolio</a></li>
                        <li><a class="options-menu" onClick={()=>closeMenu()} href="#servicios-content" >Servicios</a></li>
                        <li><a class="options-menu" onClick={()=>closeMenu()} href="#clientes">Clientes</a></li>
                        <li><a class="options-menu" onClick={()=>closeMenu()} href="#formulario-content">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
