import React, { useEffect } from 'react';
import { BiMap, BiPhoneCall } from "react-icons/bi";
import {  SiMaildotru } from "react-icons/si";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import AOS from 'aos';
import 'aos/dist/aos.css';


const mapData = {
  center: [53.14829239965705,26.017544626983604],
  zoom: 14,
};
const coordinates = [
  [53.14829239965705,26.017544626983604]
];
function HomepageFirst() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
       <div className='homepage-contacts'>
          <h2>КОНТАКТЫ</h2>
          <div className='homepage-contacts-container'>
            <div className='homepage-contacts-left'>
              <div>
              <span  data-aos="fade-right" >Адрес</span>
              <span className='head-adres' data-aos="fade-right"><BiMap className='info-ico'  />Республика Беларусь,г. Барановичи, ул. Пролетарская, 40</span>
              </div>
              <div>
              <span  data-aos="fade-right">Телефон</span>
            <span className='head-phone' data-aos="fade-right"><BiPhoneCall className='info-ico'  />375 163 67-25-73 </span>   
            </div>   
            <div>
              <span  data-aos="fade-right">Электронная почта</span>         
              <span className='head-email' data-aos="fade-right"><SiMaildotru className='info-ico'  />bzsp.omip@gmail.com </span> 
            </div>
          </div>
          <div>
              <YMaps  >
                <Map  width='100%' height='100%' defaultState={mapData} data-aos="fade-left" data-aos-duration="3000">
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
            </YMaps>
          </div>
         
            </div>
          
              
        </div>

  )
}
export default HomepageFirst;
