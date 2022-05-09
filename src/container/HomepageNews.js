import React,{useState,useEffect, Component} from 'react';
import './../assets/style/homepagenews-style.css';
import firebaseConfig from './base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

class News extends Component{
  constructor(){
    super()
    AOS.init();
    this.state = {
      newsArray:[]
    }
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref('news')
  }

  componentDidMount(){
  this.database.on('value', snap =>{
    this.setState({
      newsArray:snap.val().reverse().map((el, index)=>
      <Link to={'/news'} className="card" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000" key={(index)}>
          <div className="imgBx">
            <img src={require ('./../assets/img/news/'+el.image)}/>
            <h5>{el.date}</h5>
              <h4>{el.name}</h4>
          </div>
          <div className="details">
              <h4>{el.name}</h4>
              <p>{el.short}</p>
          </div>
      </Link>
        )
    })    
   })
}
  render(){
    return (
      <>
      <div className='news-form'>
      <h2 data-aos="zoom-out">НАШИ НОВОСТИ</h2>
      <div className='news-form-container'>
        {
        this.state.newsArray
        }
      
      </div>
      <Link id='homepage-about-right-button'to='/news' data-aos="zoom-out">Все новости +</Link> 
</div>
      </>
    )
  }
}

export default News;
