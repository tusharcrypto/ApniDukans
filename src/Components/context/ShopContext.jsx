import React, { createContext } from 'react'
import all_product from '../Assets/all_product'
export const ShopContext = createContext(null);
const ShopContextprovider = (props) => {
  const contextvalue = {all_product}; 
  return (
   <ShopContext.Provider value={contextvalue}>
    {props.children}
   </ShopContext.Provider> 
   
  )
}

export default ShopContextprovider
