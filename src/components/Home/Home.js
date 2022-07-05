import React from 'react'
import './Home.scss'
import { FaAngleDown } from "react-icons/fa";
import stefano from "../../img/home/home.png"
import vector from "../../img/home/vector.png"
import { AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";


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
                <motion.div id='burbuja-naranja' style={containerStyle} 
                                              initial={{y: "-10vw"}}
                                              animate={{y: "0vw", 
                                              transition: {duration: 1, ease: "easeInOut"}}} >
                  <div id='gradient'></div>
                </motion.div>
              </div>
          </div>
          <div id='welcome'>
              <div id='text'>
                <motion.h1 
                initial={{y: "-10vw"}}
                animate={{y: "0vw", 
                transition: {duration: 1, ease: "easeInOut"}}}
                >Stefano Sotelo</motion.h1>
                <motion.h2 
                initial={{y: "-10vw"}}
                animate={{y: "0vw", 
                transition: {duration: 1, ease: "easeInOut"}}}
                >Media Producer</motion.h2>
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
