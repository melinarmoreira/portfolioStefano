import React from 'react'
import './NavBar.scss'
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar = () => {
  return (
    <div id="nav-bar">
        <div id="profile">
        </div>
        <div id="menu-container">
            <input type="checkbox" class="toggle-check" id="toggle" hidden />
            <label class='toggle' for="toggle"><FiMenu id='toggle'/></label>
            <div id="menu-slide">
                <nav>
                    <label class="toggle-menu" for="toggle"><FiX id='toggle-menu' /></label>
                    <ul>
                        <li><a class="options-menu" href="">Sobre Mi</a></li>
                        <li><a class="options-menu" href="">Portfolio</a></li>
                        <li><a class="options-menu" href="">Servicios</a></li>
                        <li><a class="options-menu" href="">Clientes</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
