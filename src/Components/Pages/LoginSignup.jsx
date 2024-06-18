
import React, { useState } from 'react'
import './CSS/loginSignup.css'
import { Link, Navigate, Route, Routes  } from 'react-router-dom'
import Cart from './Cart'
import axios from 'axios';
export default function LoginSignup() {
  const userdetail ={UserName:"",EmailAddress:"",Password:"",Role:""};
  let [userdata,setuserdata] = useState(userdetail);
  // handle use input
  const handleuserdata =(e)=>{
    if(e.target.name==="UserName") {setuserdata({...userdata,[e.target.name]:e.target.value})}
    else if(e.target.name==="EmailAddress"){setuserdata({...userdata,[e.target.name]:e.target.value})}
    else if(e.target.name==="Password"){setuserdata({...userdata,[e.target.name]:e.target.value})}
    else if(e.target.name==="Role"){setuserdata({...userdata,[e.target.name]:e.target.value})}
  }
  // hadnle submission

  const haddlesubmitdata =(e)=>{
    e.preventDefault();
    axios.post('https://localhost:7215/api/Auth/Register',userdata).then((res)=>{
      if(res.data!==""){
        console.log(res.data);
        window.location.href = '/';
      }
    })
  }
  http://localhost:5000/signup
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields"> 
          <input type='text'  name='UserName' value={userdata.UserName} placeholder='Enter the Name' onChange={handleuserdata}></input>
          <input type='email' name='EmailAddress' value={userdata.EmailAddress} onChange={handleuserdata} placeholder='Enter the Email'></input>
          <input type='password' name='Password' value={userdata.Password} onChange={handleuserdata} placeholder='Enter the password'></input>
          <input type='text' name='Role' value={userdata.Role} onChange={handleuserdata} placeholder='Enter the role Student or Tecaher'></input>
        </div>
        <button onClick={haddlesubmitdata}>Continue</button>
        <p className='loginsignup-login'>Already have account ? <span>  <Link to='/login'>Login </Link> <Routes></Routes> </span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' required={true}></input>
          <p>By contiguning,I agree to the term use and privacy policy </p>
        </div>
      </div>
    </div>
  )
}
