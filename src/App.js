import React,{useState,useEffect, useContext} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {Header} from './Header';
import { Homepage } from './pages/Homepage';
import { Catalog } from './pages/Catalog';
import { Productions } from './pages/Productions';
import { Search } from './pages/Search';
import { Product} from './pages/Product';
import { Contacts } from './pages/Contacts';
import { Order } from './pages/Order';
import { Autorization } from './container/Autirization';

import {News} from './pages/News';
import {About} from './pages/About';
import './assets/style/all-style.css'
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { NotFound } from './pages/404';



const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('catalog');
const databaseNews = app.database().ref('news');


const App = () =>{

     const [state, setState] = useState([]);
     const [stateNews, setStateNews] = useState([]);

     useEffect(()=>{
       database.on('value', snap =>{  
       setState(snap.val())      
     })  

     databaseNews.on('value', snap =>{  
          setStateNews(snap.val())      
     })
     },[])
     return (<>

          <Routes>
               <Route path='/' element={<Header/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='/catalog' element={<Catalog db={state}/> }/> 
                    <Route path="/catalog/:id" element={<Productions db={state}/>} />
                    <Route path="/search/:id" element={<Search  db={state}/>} />
                    <Route path="/catalog/:id/:product" element={<Product db={state}/>} />
                    <Route path='/news' element={<News news={stateNews}/> }/>  
                    <Route path='/contacts' element={<Contacts/> }/>  
                    <Route path='/about' element={<About/> }/> 
                    <Route path='/account' element={<Autorization/> }/> 
                    <Route path='/order' element={<Order db={state}/> }/> 
                    <Route path='/*' element={<NotFound/> }/>  
               </Route>
               
          </Routes>

          
          
          
          </>)
}
     
export default App; //экспорт функции. которая принимается в index.js




