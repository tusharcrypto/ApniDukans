import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arrival</h2>
          <div>
            <div className="hand-icon">
              <p>New</p>
              <img src={hand_icon}/>
            </div>
            <p>Collection</p>
            <p>For EveryOne</p>
          </div>
         
            <div className="latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon}/>
            </div>
         
        </div>
        <div className="hero-right">
        <img src={hero_img}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
