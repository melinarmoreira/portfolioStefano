import React from 'react'
import './NavBarPc.scss'
import logoStefano from "../../img/logo/logo-stefano.png"

export const NavBarPc = () => {
  return (
    <div id="nav-bar-pc">
        <div id="profile">
            <a href="#home">
                <img src={logoStefano} alt="Stefano Sotelo" />
            </a>
        </div>
        <div id="menu-container">
            <nav>
                <ul>
                    <a class="options-menu" href="#sobre-mi-content"><li>Sobre Mi</li></a>
                    <a class="options-menu" href="#portfolio"><li>Portfolio</li></a>
                    <a class="options-menu" href="#servicios-content" ><li>Servicios</li></a>
                    <a class="options-menu" href="#clientes"><li>Clientes</li></a>
                    <a class="options-menu" href="#contacto"><li>Contacto</li></a>
                </ul>
            </nav>
        </div>
    </div>
  )
}
