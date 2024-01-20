import React, { useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function  Login() {
  const[email , setEmail]=useState('')
  const [password , setPassword]=useState('')
  const {user ,logIn}=UserAuth()
  const navigate= useNavigate();

  const submitHandler =async (e)=>{
      e.preventDefault();
      await logIn(email, password)
      console.log('logged in')
      navigate('/')
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
