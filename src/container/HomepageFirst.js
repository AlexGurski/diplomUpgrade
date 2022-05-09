import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDownward} from "react-icons/md";
import Modal from './../container/modalSend'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageFirst() {
  useEffect(()=>{
    AOS.init();
  },[])

  const [modal,setModal]=useState(false)
useEffect(()=>{
},[modal])

  return (
    <div className='homepage-first'>
      {modal?<Modal onModalClose={()=>{setModal(!modal)}} state={modal} />:undefined}
      <div className='homepage-first-left'>
      <div className='homepage-first-left-header'>
          <div className='homepage-first-left-header-logo'>
          </div>
        </div>
        <div className='homepage-first-left-middle'>
              <h1 data-aos="zoom-in-right" data-aos-duration="1500">
              ОАО «Барановичский завод станкопринадлежностей»
              </h1>
          <h3 data-aos="zoom-in-right" data-aos-duration="2000">
          Благодаря надежности и долговечности, технологическая оснастка Барановичского завода станкопринадлежностей завоевала высокую репутацию среди ведущих станкостроительных и машиностроительных предприятий СНГ и Балтии
          </h3>
        
        </div>
        <div className='homepage-first-left-footer' onClick={()=>setModal(!modal)} data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="300"data-aos-offset="0">
          <MdOutlineArrowDownward color="#4282e3" fontSize="1em" /> 
          Связаться с нами
        </div>
      </div>
      <div className='homepage-first-right'>
      </div>
    </div>
    )
}
export default HomepageFirst;
