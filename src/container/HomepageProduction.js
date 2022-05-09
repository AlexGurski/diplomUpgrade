import React, { useEffect } from 'react';
import { Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageProduction() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <div className='homepage-about'>
         <div  className='homepage-about-container'>
            <h2 className='homepage-about-left' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                Мы производитель универсальной зажимной технологической оснастки, а также узлы и детали для автомобильной и тракторной техники
            </h2>
            <div  className='homepage-about-right' data-aos="fade-left"  data-aos-easing="ease-in-sine" >
              <h3>
                Производим и продаем универсальную зажимную технологическую оснастку для токарных, фрезерных, сверлильных и строгальных станков, а также узлы и детали для автомобильной и тракторной техники.
              </h3>
                <Link id='homepage-about-right-button'to='/catalog'>Наш каталог +</Link>               
            </div>  
         </div>  
    </div>  
    <div className='homepage-production'>
      <div className='homepage-production-container'>
             <h2 data-aos="fade-down" data-aos-duration="3000">НАША ПРОДУКЦИЯ</h2> 
             <div className='homepage-production-list'>
               <Link to='/catalog/Патроны%20токарные' className='homepage-production-list-item' data-aos="fade-up" data-aos-duration="3000">
                  <div className='circle'>
                    <img   src={require ('./../assets/img/stanok.png')} />
                  </div>
                  <h4>Патроны токарные</h4>
               </Link>
               <Link to='/catalog/Тиски%20станочные' className='homepage-production-list-item' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
                  <div className='circle'>
                    <img   src={require ('./../assets/img/stanok1.png')} />
                  </div>
                  <h4>Тиски станочные</h4>
               </Link>
               <Link to='/catalog/Тиски%20слесарные'className='homepage-production-list-item' data-aos="fade-up" data-aos-duration="3000">
                  <div className='circle'>
                    <img   src={require ('./../assets/img/stanok2.png')} />
                  </div>
                  <h4>Тиски слесарные</h4>
               </Link>
               <Link to='catalog/Столы%20поворотные'className='homepage-production-list-item' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500">
                  <div className='circle'>
                    <img   src={require ('./../assets/img/stanok3.png')} />
                  </div>
                  <h4>Столы поворотные</h4>
               </Link>
             </div>
      </div>
      
    </div>
    </>
        
  );
}
export default HomepageProduction;
