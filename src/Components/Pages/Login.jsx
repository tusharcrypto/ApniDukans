
import React, { useEffect, useState } from 'react';
import './CSS/loginSignup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const logindetail = {UserName:"",Password:""};
  const [loigndata,setlogindata] = useState(logindetail);
  const [token,settoken] = useState("");

 useEffect(()=>{

 const token= localStorage.getItem('token');

 if (token) {
  // Decode the token
  const decodedToken = jwtDecode(token);
  // Access the role from the decoded token
  const userRole = decodedToken.role;

  // Redirect the user based on their role
  if (userRole === 'admin') {
    // Redirect to the admin page
    window.location.href = '/home';
  } else if (userRole === 'student') {
    // Redirect to the user page
    window.location.href = '/men';
  } else {
    // Handle other roles or unauthorized access
    console.error('Unknown role or unauthorized access');
  }
} else {
  console.error('Token not found');
}

 },[])

  const handlelogin =(e)=>{
    setlogindata({...loigndata,[e.target.name]:e.target.value})
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    // axios.post('http://localhost:5000/signup',userdata).then((res)=>{
    axios.post("https://localhost:7215/api/Auth/login",loigndata).then((res)=>{
      console.log(res.data)
      const token= res.data
      localStorage.setItem('token',token)
      settoken(token)

      // Decode the token
  const decodedToken = jwtDecode(token);
  // Access the role from the decoded token
  const userRole = decodedToken.role;

  // Redirect the user based on their role
  if (userRole === 'admin') {
    // Redirect to the admin page
    window.location.href = '/home';
  } else if (userRole === 'student') {
    // Redirect to the user page
    window.location.href = '/men';
  } else {
    // Handle other roles or unauthorized access
    console.error('Unknown role or unauthorized access');
  }

      //if(res.data==true) window.location.href="/"  
      // else{
      //   window.location.href='/men'
      // }  
    })

  }
  return (
    <div className="login-sinup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginSignup-fields"> 
          {/* <input type='text' placeholder='Enter the Name'></input> */}
          {/* <input type='email' name='email' value={loigndata.email} onChange={handlelogin} placeholder='Enter the Email'></input> */}
          <input type='text'  name='UserName' value={loigndata.UserName} placeholder='Enter the Name' onChange={handlelogin}></input>
          <input type='password' name='Password' value={loigndata.Password} onChange={handlelogin} placeholder='Enter the password'></input>
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
