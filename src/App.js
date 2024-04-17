
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from '../src/Components/Pages/Cart'
import Shop from '../src/Components/Pages/Shop'
import ShopCategory from '../src/Components/Pages/ShopCategory'
import Product from '../src/Components/Pages/Product'
import LoginSignup from '../src/Components/Pages/LoginSignup'
import Footer from '../src/Components/Footer/Footer'
import mens_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Login from './Components/Pages/Login';
function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={mens_banner} category="men"/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid"/>} />
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup/*' element={<LoginSignup/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>  
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
