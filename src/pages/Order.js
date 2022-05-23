import React,{useState,useEffect, useContext} from 'react';
import '../assets/style/order.css';
import { Link} from 'react-router-dom'
import { useParams} from 'react-router-dom'
import { UserContext } from "../context";
import firebaseConfig from '../container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { nowTime } from '../container/dateTime';
import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'
const app = firebase.initializeApp(firebaseConfig);


const Order = () => {

const {accountName,setAccountName} = useContext(UserContext) 

useEffect(()=>{  
  console.log(accountName.purshise)
},[])

  return (<>
    {accountName.purshise!==''? 
    <div className='order'> 
    <h1>Корзина</h1>
    <div className='order_content'>
      {accountName.purshise.map(el=>{
        return(
          <a>
            <div className='order_content_imagecounter'>
              <img  src={require('./../assets/img/product/'+el[Object.keys(el)].image.picture)}/>
              <span className='order_content_counter'><FiPlusSquare/> <input type='text'/> <FiMinusSquare/></span>
            </div>
            <Link to={`/catalog/${el[Object.keys(el)].key}/${Object.keys(el)}`}className='order_content_text'>
              <h2 >{Object.keys(el)}</h2>
              <div className='order_content_text_desc'>{el[Object.keys(el)].discription.map(e=><p>{e}</p>)}</div>
            </Link>            
          </a>
        )
      })}
    </div>
    <div className='order_accept'onClick={()=>{
       firebase.database().ref(`/order/${accountName.name}/${nowTime()}/`).set(accountName.purshise);
       setAccountName({...accountName, purshise:''})
    }}> Сделать заказ </div>
  </div>

    :undefined}
    
    </>      
  );
}
export { Order } 
