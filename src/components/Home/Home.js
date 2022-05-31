import React from 'react'
import './Home.scss'
import { FaAngleDown } from "react-icons/fa";
import stefano from "../../img/home/home.png"
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { Link } from 'react-router-dom';

export const Home = () => {
  const containerStyle = {
    backgroundImage:
      `url(${stefano})`,
    backgroundSize:"cover"
  };
  return (
    <div id='home'>
        <div id='content-profile-welcome'>
          <div id='burbujas'>
              <div id='burbuja'>
                <div id='burbuja-naranja' style={containerStyle}>
                  <div id='gradient'></div>
                </div>
              </div>
          </div>
          <div id='welcome'>
              <div id='text'>
                <h1>Stefano Sotelo</h1>
                <h2>Media Producer</h2>
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
