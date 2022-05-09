import React, { useEffect, useState } from 'react';
import {Link, useNavigate, Routes, Route } from 'react-router-dom'

import './assets/style/header-style.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const app = firebase.initializeApp(firebaseConfig);

function Header() {
  
  const navigate = useNavigate();
  const [check, setCheck]=useState(false)
  const [opacity, setOpacity]=useState({display:"none"})

  useEffect(()=>{
    check?setOpacity({display:"block"}):setOpacity({display:"none"})
  },[check])

  const styles = {  
    position: 'fixed',
    top: '25px',
    left: '25px',
    zIndex: '100',
    width: '95vw',
    height: '100vh',
  }
  const noStyle = {
    position: 'fixed',
    top: '25px',
    left: '25px',
    width: '0vw',
    height: '0vh',
  }
  return (
    <>
  <nav id='navigat' role="navigation">
            <div id="menuToggle" style={check?styles:noStyle}>
              <input type="checkbox" onClick={()=>setCheck(!check)} checked={check}/>
                <span></span>
                <span></span>
                <span></span>
            <ul className="nav" id="menu">
                <li style={opacity} onClick={()=>setCheck(!check)}><Link to='/' className="nav-item">Главная</Link></li>
                <li style={opacity} onClick={()=>setCheck(!check)}><Link to='/catalog' className="nav-item">Каталог</Link></li>
                <li style={opacity} onClick={()=>setCheck(!check)}><Link to='/about' className="nav-item">О компании</Link></li>
                <li style={opacity} onClick={()=>setCheck(!check)}><Link to='/news' className="nav-item">Новости</Link></li>
                <li style={opacity} onClick={()=>setCheck(!check)}><Link to='/contacts' className="nav-item">Контакты</Link></li>
                <input className="search__input nav-item-text"  placeholder="Поиск" type="text" onKeyPress={ ( async e =>{
          if (e.key==='Enter'){

            navigate("/search/"+e.target.value); 
            e.target.value='';
          //  console.log(e.target.value) 
            setCheck(!check)
          }
      } 
        )}/>     
            </ul>
           </div>
  </nav>

<div className="menu">
  <div className="title">|  |</div>
    <ul className="nav">
      <li><Link to='/' className="nav-item">Главная</Link></li>
      <li><Link to='/catalog' className="nav-item">Каталог</Link></li>
      <li><Link to='/about' className="nav-item">О компании</Link></li>
      <li><Link to='/news' className="nav-item">Новости</Link></li>
      <li><Link to='/contacts' className="nav-item">Контакты</Link></li>
      <input className="search__input" type="text" placeholder="Поиск" onKeyPress={ ( async e =>{
          if (e.key==='Enter'){
            navigate("/search/"+e.target.value); 
            e.target.value='';
            console.log(e.target.value) 
          }
      } 
        )}/>        
    </ul>
 </div>
 </>
  );
}

export default Header;

