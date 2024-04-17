import React from 'react'
import './related.css'
import Items from '../Items/Items'
import related_product from '../Assets/data'
const RelatedProduct = () => {
  return (
    <div className="related-product">
      <h1>Related Product</h1>
      <hr></hr>
      <div className="related-item">
        {related_product.map((item,i)=>{return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/> })}
      </div>
    </div>
  )
}

export default RelatedProduct
