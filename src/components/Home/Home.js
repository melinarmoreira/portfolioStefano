import React from 'react'
import './Home.scss'
import { FaAngleDown } from "react-icons/fa";
import megafono from "../../img/icons/megafono.png"
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div id='home'>
        <div id='content-profile-welcome'>
          <div id='burbujas'>
              <div id='burbuja'>
                <div id='burbuja-naranja'>
                  <img src={megafono} alt="" />
                </div>
              </div>
          </div>
          <div id='welcome'>
              <div id='text'>
                <h3>BIENVENIDOS A</h3>
                <h1>Stefano Sotelo</h1>
                <h2>Creo contenido</h2>
              </div>
          </div>
        </div>
        <div id='arrow'>
          <div id='wsp'>
            <AiOutlineWhatsApp className='wsp-icon'/>
          </div>
          <a href='#sobre-mi-content'>
            <FaAngleDown className='arrow-down' id='arrow-25'/>
            <FaAngleDown className='arrow-down' id='arrow-55'/>
            <FaAngleDown className='arrow-down' id='arrow-100'/>
          </a>
        </div>
    </div>
  )
}
