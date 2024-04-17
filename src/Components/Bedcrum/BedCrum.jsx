import React from 'react'
import './bedcrum.css'
import arrow from '../Assets/breadcrum_arrow.png'
const BedCrum = (props) => {
  const {product} = props
  // console.log(product.image)
  return (
 
    <div className='bedcrum'>
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" /> {product.category}<img src={arrow} alt="" />  {product.name}
      {/* <img src={product.image}></img> */}
    </div>
  )
}

export default BedCrum
