import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import inst_icon from '../Assets/instagram_icon.png'
import pinintrest  from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt='footer-logo'></img>
        <p>Apni Dukan</p>
      </div>
      <ul className='footer-list'>
        <li>Compnay</li>
        <li>Products</li>
        <li>Office</li>
        <li>Abouts Us</li>
        <li>contacts </li>
      </ul>
      <div className="footer-social-icon">
      <div className="icon-container">
          <img src={inst_icon}></img>
        </div>
        <div className="icon-container">
          <img src={pinintrest}></img>
        </div>
        <div className="icon-container">
          <img src={whatsapp}></img>
        </div>
      </div>
    </div>
  )
}

export default Footer
