import React from 'react'
import './Home.scss'
import { FaAngleDown } from "react-icons/fa";
// import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div id='home'>
        <div id='burbujas'>
            <div id='burbuja'>
        </div>
        </div>
        <div id='welcome'>
            <h3>BIENVENIDOS A</h3>
            <h1>Stefano Sotelo</h1>
            <h2>Creamos contenido</h2>
        </div>
          <div id='arrow'>
          <a href='#sobre-mi'>
              <FaAngleDown className='arrow-down' id='arrow-25'/>
              <FaAngleDown className='arrow-down' id='arrow-55'/>
              <FaAngleDown className='arrow-down' id='arrow-100'/>
              </a>
          </div>
    </div>
  )
}
