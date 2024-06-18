
import React, { useEffect, useState } from 'react';
import './CSS/loginSignup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import jwtdecode, { jwtDecode } from 'jwt-decode'
=======
import { jwtDecode } from 'jwt-decode';
>>>>>>> 0b373f4cc819c1cbac5a481207ae22ea382b8a80

export default function Login() {
  const logindetail = {UserName:"",Password:""};
  const [loigndata,setlogindata] = useState(logindetail);
<<<<<<< HEAD
  // const [token,settoken] = useState("");
=======
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

>>>>>>> 0b373f4cc819c1cbac5a481207ae22ea382b8a80
  const handlelogin =(e)=>{
    setlogindata({...loigndata,[e.target.name]:e.target.value})
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    // axios.post('http://localhost:5000/signup',userdata).then((res)=>{
<<<<<<< HEAD
    axios.post("http://localhost:5000/login",loigndata).then((res)=>{
    console.log(typeof(res)) 
    const token = res.data;
    if(!token){
      alert("Invalid Email or Password")
      window.location.href="/women" 
      
    }
      console.log(token)
      const decodetoken = jwtDecode(token)
      console.log(decodetoken.role)
      if(decodetoken.role==="student"){
          localStorage.setItem('token1',token); 
          // settoken(token)
          // window.location.href="/" 
      }
      else if(decodetoken.role==="admin"){
        localStorage.setItem('token1',token); 
        // window.location.href="/men" 
        
      }
=======
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
>>>>>>> 0b373f4cc819c1cbac5a481207ae22ea382b8a80
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
