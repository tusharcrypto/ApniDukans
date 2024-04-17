import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'
const Items = (props) => {
  return (
    
      <div className="item" catgeory={props.catgeory}>
       <Link to={`/product/${props.id}`} onClick={window.scrollTo(0,0)} > <img src={props.image} /></Link>
        <p>{props.name}</p>
        <div className="prices">
         Rs <div className="new-price">{props.new_price}</div>
         Rs <div className="old-prices">{props.old_price}</div>
        </div>
      </div>
    
  )
}

export default Items
