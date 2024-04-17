import  React, { useState } from  'react'
import './Navbar'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = ()=>{
  const [menu,setmenu] = useState("shop")
  return (
    <>
    <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt='logo'/>
      <p>Apni Dukan</p>
    </div>
    <ul className='nav-menu'>
    <li onClick={()=>{setmenu("shop")}}><Link id='link' to='/'>Home</Link>{menu==='shop'?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("men")}}><Link id='link' to='/men'>Mens</Link>{menu==='men'?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("women")}}><Link id='link' to='/women'>Womens</Link>{menu==='women'?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("kid")}}><Link id='link' to='/kid'>Child</Link>{menu==='kid'?<hr/>:<></>}</li>
    </ul>
    <div className="nav-cart">
      <Link id='link' to='/signup'><button >Sign In</button></Link>
      <Link id='link' to='/login'><button >Login</button></Link>
      <Link id='link' to='/cart'><img src={cart_icon} alt='bag-icon'/></Link>
      <div className="nav-counter">0</div>
    </div>
    </div>
    </>
  )
}

export default Navbar;