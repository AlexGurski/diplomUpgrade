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
              <span   >Адрес</span>
              <span className='head-adres'><BiMap className='info-ico'  />Республика Беларусь,г. Барановичи, ул. Пролетарская, 40</span>
              </div>
              <div>
              <span  >Телефон</span>
            <span className='head-phone' ><BiPhoneCall className='info-ico'  />375 163 67-25-73 </span>   
            </div>   
            <div>
              <span  >Электронная почта</span>         
              <span className='head-email' ><SiMaildotru className='info-ico'  />bzsp.omip@gmail.com </span> 
            </div>
          </div>
          <div>
              <YMaps  >
                <Map  width='100%' height='100%' defaultState={mapData} >
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                </Map>
            </YMaps>
          </div>
         
            </div>
          
              
        </div>

  )
}
export default HomepageFirst;
