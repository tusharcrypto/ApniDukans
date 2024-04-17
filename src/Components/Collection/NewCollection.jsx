import React from 'react'
import './collection.css'
import collection_item from '../Assets/new_collections'
import Items from '../Items/Items'
const NewCollection = () => {
  return (
   
      <div className="new-collection">
        <h1>New Collection</h1>
        <hr></hr>
        <div className="collection-item">
            {collection_item.map((item,i)=>{return  <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>})}
        </div>
     
    </div>
  )
}

export default NewCollection
