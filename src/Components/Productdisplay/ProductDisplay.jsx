import React from 'react'
import './productdisplay.css'
import star from '../Assets/star_icon.png'
import dullstar from '../Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
  const {product} = props
  // console.log(product)
  return (
   <div className="product-display">
    <div className="productdisplay-left">
      <div className="productdisplay-list">
        <img src={product.image} alt=''></img>
        <img src={product.image} alt=''></img>
        <img src={product.image} alt=''></img>
        <img src={product.image} alt=''></img>
      </div>
      <div className="productdisplay-main-image">
        <img src={product.image} alt=''></img>
      </div>
    </div>
    <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="product-star">
      <img src={star}></img>
      <img src={star}></img>
      <img src={star}></img>
      <img src={star}></img>
      <img src={dullstar}></img>
      <p>(122)</p>
    </div>
    <div className="productprices">
      <div className="productPriceOld">${product.old_price}</div>
      <div className="productPriceNew">${product.new_price}</div>
    </div>
    <div className="rightproductDesciption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quas deleniti minima, voluptas ut eaque.</div>
    <div className="rightproductSize">
      <h1>Select the Size</h1>
      <div className="productsizeList">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XXL</div>
      </div>
      <button>Add to Cart</button>
    </div>
    </div>
   </div>
  )
}

export default ProductDisplay
