import React, { useState } from 'react';
import { useEffect , useContext } from 'react';
import {db } from '../../firebase/config'
import { collection, getDocs , query, orderBy } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import Heart from '../../assets/Heart';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';

function Posts() {

  const [products , setProducts]=useState([]);
  const navigate=useNavigate();
  const {setPostDetails}= useContext(PostContext);

  function handleClick(product){
    setPostDetails(product)
    navigate('view')
  }


  

useEffect(() => {
 const fetchData = async () => {
    const q = query(collection(db, 'products')); 
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    setProducts(data);
    console.log(data)
 };

 fetchData();
}, []);


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {products.map(product=>{

          return <div
            className="card" onClick={()=>handleClick(product)}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.created}</span>
            </div>
          </div>
        })

        }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products.map(product=>{

            return <div
              className="card" onClick={()=>handleClick(product)}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.created}</span>
              </div>
            </div>
            })

            }
        </div>
      </div>
    </div>
  );
}

export default Posts;
