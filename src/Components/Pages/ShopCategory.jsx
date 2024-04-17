import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown from '../Assets/dropdown_icon.png'
import Items from '../Items/Items'
import './CSS/shopcategory.css'
export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)


  
  return (
    <div className='shop-category'>
      <img className='category-banner' src={props.banner}></img>
      <div className="shopcategory-sortbyindex">
        <p> <span>Showing 1-12</span> out of 36 product</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown}></img>
        </div>
      </div>
      <div className="allcategory-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            
            return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}
