import React from 'react';
import { useState , useContext, useEffect } from 'react';
import { db } from '../../firebase/config';
import './View.css';
import { PostContext } from '../../context/PostContext';
import { AuthContextProvider } from '../../context/AuthContext';
import { query,getDocs , collection ,where  } from 'firebase/firestore';
function View() {

const [userDetails , setUserDetails]=useState();
const {postDetails} =useContext(PostContext)

const userId=postDetails.userId

useEffect(()=>{
  const fetchData = async () => {
    const q = query(collection(db, 'users'),where('id','==',userId)); 
    const querySnapshot = await getDocs(q);
    
    const data = querySnapshot.docs.map(doc => (doc.data()));
   setUserDetails(...data);
   console.log(...data)

    
};

fetchData();
},[])
  
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.created}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          {userDetails ? (
            <div>
            <span>Name  : </span><span>{userDetails.username}</span><br></br>
            <span>Phone : </span><span>{userDetails.phone}</span><br></br>
            <span>E mail: </span><span>{userDetails.email}</span>
            </div>
          )
          :(

            <div></div>
          )
          }
        </div>
      </div>
    </div>
  );
}
export default View;
