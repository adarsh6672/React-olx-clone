import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import  Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='create'  element={<Create />} />

    </Routes>
     
    </>
  );
}

export default App;
