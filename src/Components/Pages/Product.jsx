import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BedCrum from '../Bedcrum/BedCrum';
import ProductDisplay from '../Productdisplay/ProductDisplay';
import ProductDesp from '../ProductDesp/ProductDesp';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
const Product = () => {
  const {all_product} = useContext(ShopContext);  
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId))
  return (
    <div>
      <BedCrum product={product}></BedCrum>
      <ProductDisplay product={product}></ProductDisplay>
      <ProductDesp></ProductDesp>
      <RelatedProduct></RelatedProduct>
    </div>
  )
}

export default Product
