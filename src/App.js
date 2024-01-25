import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import  Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import Post from './context/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import View from './Components/View/View';
import ViewPost from './Pages/ViewPost';

function App() {
  return (
    <>
    <Post>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='create'  element={<Create />} />
      <Route path='view'  element={<ViewPost />} />

    </Routes>
    </Post>
    </>
  );
}

export default App;
