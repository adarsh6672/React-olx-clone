import React, { useState ,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {

  const [username , setUsername]=useState('');
  const [password , setPassword]=useState('');
  const [email , setEmail]=useState('');
  const [phone , setPhone] =useState('');
  const {user , signUp}= UserAuth()
  const navigate= useNavigate();

  const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
      await signUp(email,password,phone,username)
      console.log('signed in')
      navigate('/login')

      
    }
    catch(error){
      console.log(error)
    }
    
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='olx'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
