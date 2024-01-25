import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { storage,db } from '../../firebase/config';
import { UserAuth } from '../../context/AuthContext';
import {getStorage , ref , uploadBytes ,getDownloadURL} from 'firebase/storage'
import { Firestore, addDoc,collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const{user}=UserAuth()
  const navigate=useNavigate();
  

  const [name ,setName]= useState('')
  const [category , setCategory] =useState('');
  const [price , setPrice ]= useState('');
  const [image , setImage] = useState('');


  
  const storageRef=ref(storage,`/image/${image.name}`);

  const date = new Date();
  const handleSubmit =async  () => {
    try{
      const uploadTask=await uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url)=>{
          
          addDoc(collection(db,'products'),{
            name:name,
            category:category,
            price:price,
            url:url,
            userId:user.uid,
            created:date.toDateString()
          });
          console.log('file avilable' ,url)
          })
        })
        console.log('Uploaded a blob or file!');
        navigate('/')
      }
    catch(error){
      console.log(error)
    } 
   };


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              onChange={(e)=>setName(e.target.value)}
              value={name}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              onChange={(e)=>setCategory(e.target.value)}
              value={category}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
              onChange={(e)=>setPrice(e.target.value)}
              value={price}
             className="input" 
             type="number"
              id="fname" 
              name="Price" />
            <br />
          
          <br />
          {image ?(< img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>) :(<div></div>) }
          
         
          
            <br />
            <input
            onChange={(e)=>{
              setImage(e.target.files[0])
            }}
            type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
