import React from 'react'
import './style.css'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Logo from '../../assets/logo.png'


export default function Footer() {
  return (
    <footer>
    <div className='linha'></div>
    <div className='footer-content'>
    <div className='social'>
      <img src={Linkedin} alt="" />
      <img src={Instagram} alt="" />
      <img src={Facebook} alt="" />
    </div>
      
    </div>
    <div className='logo'>
      <img src={Logo} alt="logo" />
    </div>
    <div className='blur blur-f-1'></div>
    <div className='blur blur-f-2'></div>
    </footer>
  )
}
