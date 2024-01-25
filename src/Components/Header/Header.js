import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { UserAuth } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const {user ,logOut}=UserAuth();
  const navigate = useNavigate();

  const logOutHandler=async ()=>{
    try{
      await logOut();
      navigate('/login')
      console.log('logged out')
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>navigate('/')}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user?.email ?
          (
            <>
              <div className="loginPage">
                <a>Account</a>
                <hr />
              </div>
              <div className="loginPage">
                <a onClick={logOutHandler}>Log Out</a>
                <hr />
              </div> 
              </>
          ):(
            <div className="loginPage">
              <Link to='login'>
              <a>Login</a>
              <hr />
              </ Link>
            </div>
          )
        }
        

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='create'>
            <span>SELL</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
