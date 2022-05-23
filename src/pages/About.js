import React,{useState,useEffect} from 'react';
import '../assets/style/about.css';
import {FaSquareFull} from 'react-icons/fa'
import {Parallax} from 'react-scroll-parallax'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='aboutPretty' id='about'>   
      <div className='aboutPretty_container'>
        <div className='aboutPretty_container_top'>
          <div className='aboutPretty_container_top_left'>
          <p></p>
          <span data-aos="fade-up" data-aos-duration="2000" ><FaSquareFull style={{color:'red', marginRight:'1em'}}/><h3>Основан в Барановичах в апреле 1946 года.</h3> </span> 
          
          <p><Parallax speed={-5}> ОАО «БЗСП» более 70 лет известен на рынке стран ближнего и дальнего зарубежья как производитель универсальной станочной оснастки, комплектующих узлов и деталей для станкостроительной, автомобильной и тракторной промышленности.</Parallax></p>                
          
          <Parallax blur={5}><div></div></Parallax>
          </div>
          <div className='aboutPretty_container_top_right'>            
            <p>Наше предприятие обладает большим парком металлообрабатывающего оборудования: токарные станки с ЧПУ, токарно-карусельные, токарно-винторезные станки; плоско -, кругло -, резьбошлифовальные станки; сверлильные и координатно-расточные станки; фрезерные и фрезерные с ЧПУ, зубообрабатывающие и протяжные станки. Также имеется термогальванический участок, в котором осуществляется объемная закалка, закалка ТВЧ, цементация, хромирование, цинкование, оксидирование.</p>
          </div>
        </div>
        <div className='aboutPretty_container_top'>
          <div className='aboutPretty_container_top_left'>
          <p></p>
      
          <p></p> 
          <p>Рассмотрим Ваши предложения о возможности изготовления любых других деталей (узлов) по Вашим чертежам либо техническим заданиям.</p> 
          <button class="skewBtn brick">Связаться с нами</button>            
          <p></p>  
          <p></p>
          </div>
          <div className='aboutPretty_container_top_right'>            
          <Parallax speed={-5}> <div></div></Parallax>
          </div>
        </div>
        <div className='aboutPretty_container_sertificate'>
          <h3>В декабре 2000 года завод получил сертификат соответствия №BY/ 112 05. 01. 009. 0064, удостоверяющий, что система качества проектирования тисков слесарных и станочных, патронов токарных ручных и механизированных, столов поворотных, муфт быстроразъёмных и устройств запорных, а также цилиндров вращающихся зажимных соответствует требованиям СТБ ИСО 9001-96.</h3>
          <img src={require('../assets/img/sert.jpg')}/>
        </div>
      </div> 
    </div>
  );
}
export { About } 
