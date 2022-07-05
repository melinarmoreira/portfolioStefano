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
            <a href="https://www.linkedin.com/in/stefanosotelo/" target="_blank">
                <div className='burbuja'>
                    <FaLinkedinIn className='icon' />
                </div>
            </a>
            <a href="https://www.instagram.com/stefasotelo/" target="_blank">
                <div className='burbuja'>
                    <AiFillInstagram className='icon' />
                </div>
            </a>
            <a href="https://www.behance.net/stefanosotelo" target="_blank">
                <div className='burbuja'>
                    <AiOutlineBehance className='icon' />
                </div>
            </a>
            <a href="https://www.youtube.com/channel/UCwOhifMi7CIJr0IpPc9sFLQ" target="_blank">
                <div className='burbuja'>
                    <AiFillYoutube className='icon' />
                </div>
            </a>
        </div>
        <div id='copy'>
            <h5>© Copyright 2022 | Coderhouse</h5>
        </div>
    </div>
  )
}
