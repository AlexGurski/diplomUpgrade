import React from 'react';
import {Link} from 'react-router-dom'
import './assets/style/footer-style.css';

//обычная разметка как в хтмл
const App = () => (
  <div className='footer'>    
    <div className='footer-left'>
      <img  src={require('./assets/img/bzsp_logo.png')}/>
    </div>
    <div className='footer-center'>
      <div className='footer-center-nav'>
        <Link to='/'>Главная</Link>
        <Link to='/catalog'>Каталог</Link>
        <Link to='/about'>О компании</Link>
        <Link to='/news'>Новости</Link>
        <Link to='/contacts'>Контакты</Link>
      </div>
      <div className='footer-center-adres'>
      225411 Республика Беларусь, Брестская область,г. Барановичи, ул. Пролетарская, 40
      </div>
    </div>
    <div className='footer-right'>
      <h3>@БарГУ 2022</h3>
    </div>
  </div>
 
);

export default App;

