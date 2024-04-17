
import React, { useState } from 'react'
import './CSS/loginSignup.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Login() {
  const logindetail = {email:"",password:""};
  const [loigndata,setlogindata] = useState(logindetail);
  const handlelogin =(e)=>{
    setlogindata({...loigndata,[e.target.name]:e.target.value})
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    // axios.post('http://localhost:5000/signup',userdata).then((res)=>{
    axios.post("http://localhost:5000/login",loigndata).then((res)=>{
      console.log(res.data)
      if(res.data==true) window.location.href="/"  
      else{
        window.location.href='/men'
      }  
    })

  }
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginSignup-fields"> 
          {/* <input type='text' placeholder='Enter the Name'></input> */}
          <input type='email' name='email' value={loigndata.email} onChange={handlelogin} placeholder='Enter the Email'></input>
          <input type='password' name='password' value={loigndata.password} onChange={handlelogin} placeholder='Enter the password'></input>
        </div>
        <button onClick={handlesubmit}>Continue</button>
        <p className='loginsignup-login'>Not Register Yet ? <span> <Link to='/signup'>Sign Up</Link> </span></p>
        <div className="loginsignup-agree">
          <input type='checkbox'></input>
          <p>By contiguning,I agree to the term use and privacy policy </p>
        </div>
      </div>
    </div>
  )
}
