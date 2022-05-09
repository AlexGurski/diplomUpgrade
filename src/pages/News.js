import React, { useEffect, useState } from 'react';
import '../assets/style/news.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ModalNews = (props) =>
  <div id="open-modal" className="modal-window">
    {console.log(props)}
  <div className='news-text'>
  <div className='closeModalNews' onClick={()=>props.onModalClose()}>╳</div>
    <h1>{props.news.name}</h1>
    {props.news.text.split('\n').map(el=><p key={el+el}>{el}</p>)}
    
    <div><small>{props.news.date}</small></div>
  </div>
  </div>


const News = ({news}) => {

  useEffect(()=>{
    AOS.init();
  },[])

  const [state, setState]=useState(news)
  const [count,setCount]=useState({
    name:'',
    text:'',
    date:''
  })
  const [modal, setModal]=useState(false)

  useEffect(()=>{
    if (news){setState(news)}
  },[news])


  return (
    <div className='news'>    
    <h2 data-aos-duration="1500" data-aos="fade-down">НОВОСТИ</h2>  
    {modal?<ModalNews  onModalClose={()=>{setModal(!modal)}} state={modal} news={count}/>:undefined}
       <div className='news-container'>
         {
          state.reverse().map(el=>
          
            <div className="blog-card" key={el.text}  onClick={()=>{setModal(!modal); setCount({name:el.name, text:el.text, date:el.date})}} data-aos="zoom-out" data-aos-duration="1500">            
              <img className="blog-img" src={require('./../assets/img/news/'+el.image)}   />
              <div className="text-overlay">
                <h5>{el.name}</h5>
                <p>{el.short}</p>
              </div>  {console.log(el)}
            </div>
         )
         }
      </div>
    </div>
   
  );
}
export { News } 
