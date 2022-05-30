import React from 'react'
import logo from '../../img/footer/logo-footer.png'
import './Footer.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiOutlineBehance, AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <div id='footer'>
        <div id='logo'>       
            <img src={logo} alt="logo stefano"/>
        </div>
        <div id='redes'>
            <div className='burbuja'>
                <FaLinkedinIn className='icon' />
            </div>
            <div className='burbuja'>
                <AiFillInstagram className='icon' />
            </div>
            <div className='burbuja'>
                <AiOutlineBehance className='icon' />
            </div>
            <div className='burbuja'>
                <AiFillYoutube className='icon' />
            </div>
        </div>
        <div id='copy'>
            <h5>© Copyright 2022 | Coderhouse</h5>
        </div>
    </div>
  )
}
