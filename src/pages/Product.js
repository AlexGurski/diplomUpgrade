import React,{useState,useEffect, useContext} from 'react';
import '../assets/style/product.css';
import YouTube from 'react-youtube';
import { Link} from 'react-router-dom'
import FeedBack from '../container/FeedBack'
import { useParams} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MdAddShoppingCart, MdOutlineStarRate} from 'react-icons/md'
import { UserContext } from "../context";

import firebaseConfig from '../container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const app = firebase.initializeApp(firebaseConfig);

const Product = (db) => {
const {id, product} =  useParams();
const {accountName,setAccountName} = useContext(UserContext) 
const [productName, setProductName]=useState([])
const [imageChoise, setImageChoise]=useState({
  image:{display:''},
  plan:{display:'none', width:'100%', height:'100%'},
  colorImage:{background:'#4282e3'},
  colorPlan:{background:'white'}
})

useEffect(()=>{
  AOS.init();
},[])

useEffect(()=>{  
  db.db[id] !=undefined ? setProductName(db.db[id][product]):setProductName([])
},[db])

  return (
    <div className='Product'> 
    <FeedBack element={product}/> 
      {
        <div className='product-container'>
          <Link to={'/catalog/'+id} className='button-back'><span>Назад</span></Link>
          <h1 data-aos="fade-down" data-aos-duration="2000">{product}</h1>
          <div className='product-item'>
          <div className='product-item-left' data-aos="fade-right" data-aos-duration="2500">
              {productName.image?
                        productName.image.picture?
                        <><div className='box15_tape'></div><img style={imageChoise.image}  tabindex="0" src={require('./../assets/img/product/'+productName.image.picture)}/> </>
                        :<img style={imageChoise.image}  src={require('./../assets/img/product/no_photo.jpg')}/>
              :console.log()} 
              {productName.image?
                        productName.image.plan?
                        <img style={imageChoise.plan} tabindex="0" src={require('./../assets/img/product/'+productName.image.plan)}/>
                        :<img style={imageChoise.plan} src={require('./../assets/img/product/no_photo.jpg')}/>
              :console.log()} 
             <div className='product-item-button'>
                <span style={imageChoise.colorImage} onClick={()=>
                         setImageChoise({ 
                            image:{display:''},
                            plan:{display:'none'},
                            colorImage:{background:'#4282e3'},
                            colorPlan:{background:'white'}
                         })
                      }>Фото</span>
                <span style={imageChoise.colorPlan} onClick={()=>
                          setImageChoise({ 
                            image:{display:'none'},
                            plan:{display:''},
                            colorImage:{background:'white'},
                            colorPlan:{background:'#4282e3'}
                         })
                      }> Чертёж</span>
             </div>
          </div>
            <div className='product-item-right' data-aos="fade-left" data-aos-duration="1500">  
            <div className='product-discription'>
            <div className='product-discription-inner'  >
              <h2>Описание</h2>
                      {productName.discription? productName.discription.map(el=> <p>{el}</p>) :undefined}
                      
                {productName.complectation?
                  <>
                      <h2>Комплектация</h2>
                      <p>{productName.complectation}</p>
                  </>                  
                :undefined}
                
                {productName.image?
                  productName.image.video?<YouTube opts={{height: '450',width: '100%'}} videoId={productName.image.video}/>:undefined
                :undefined
              }
              
            </div>            
            </div>
            {console.log(productName)}
            {accountName.name!==''?
                   <div>
                    <MdAddShoppingCart className='to-orders' onClick={()=>{
                      setAccountName({...accountName, purshise:[...accountName.purshise, {[product]:productName}]})
                    }}/>
                    <MdOutlineStarRate className='to-orders' onClick={()=>{
                      console.log(accountName)
                      firebase.database().ref(`/users/${accountName.name}/likes`).update({[product]:productName});
                    }}/>
                   </div>
                   :undefined}
          </div>
          </div>
        
        </div>
      }
    </div>      
  );
}
export { Product } 
