import React from 'react'
import './popular.css'
import product_data from '../Assets/data'
import Items from '../Items/Items'
const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>Popular In Womens</h1>
        <hr></hr>
        <div className="popular-item">
          {product_data.map((item,i)=>{
            return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Popular
