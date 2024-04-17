import React from 'react'
import exclusive_img  from '../Assets/exclusive_image.png'
import './offers.css'
const Offers = () => {
  return (
    <div>
      <div className="offer">
        <div className="offer-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>Only Best Sellers Product</p>
          <button>Check Now</button>
        </div>
        <div className="offer-right">
          <img src={exclusive_img }/>
        </div>
      </div>
      
    </div>
  )
}

export default Offers
