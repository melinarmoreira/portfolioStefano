import React from 'react'
import './Home.scss'
import { FaAngleDown } from "react-icons/fa";
import stefano from "../../img/home/home.png"
import vector from "../../img/home/vector.png"
import { AiOutlineWhatsApp } from "react-icons/ai";
// import { Link } from 'react-router-dom';

export const Home = () => {

  const enviarWsp = () =>{
    window.location.assign("https://api.whatsapp.com/send?phone=5492914719897&text=Buenos%20dias%20Stefano%20estuve%20viendo%20tu%20portfolio...");
  }
  const containerStyle = {
    backgroundImage:
      `url(${stefano})`,
    backgroundSize:"cover"
  };
  return (
    <div id='home'>
        <div id='content-profile-welcome'>
          <div id='burbujas'>
              <img className='vector vector-top'src={vector} />
              <img className='vector vector-bottom'src={vector} />
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
          <a id='wsp' href="https://api.whatsapp.com/send?phone=5492914719897&text=Buenos%20dias%20Stefano%20estuve%20viendo%20tu%20portfolio..." target="_blank">
            <AiOutlineWhatsApp className='wsp-icon'/>
          </a>
          <a href='#sobre-mi-content'>
            <FaAngleDown className='arrow-down' id='arrow-25'/>
            <FaAngleDown className='arrow-down' id='arrow-55'/>
            <FaAngleDown className='arrow-down' id='arrow-100'/>
          </a>
        </div>
    </div>
  )
}
