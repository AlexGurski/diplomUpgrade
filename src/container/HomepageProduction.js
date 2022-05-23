import React, { useEffect } from 'react';
import { Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Parallax} from 'react-scroll-parallax'
function HomepageProduction() {
  useEffect(()=>{
    AOS.init();
  },[])
  const HomepagePretty = () =>(
    
    <div className='homepage_pretty'>    
      <div>
        <div className='homepage_pretty_hightLeft'>
        </div>
        <div>
        <Parallax speed={-10}> 
          <p className='pRight'>Имеется возможность проектирования и изготовления для Вас специальной зажимной оснастки на базе механизированных патронов, тисков, пневмоцилиндров.  </p>
        </Parallax>
        </div>
      </div>
      <div>
        <div>
          <Parallax speed={-10}> 
          <p className='pLeft'>Широкий набор современного оборудования позволяет нам реагировать на потребность рынка и в короткие сроки выполнять заказы как на серийную продукцию, так и на разовые заказы.</p>
          </Parallax>
        </div>
        <div className='homepage_pretty_bottomRight'>
        </div>
      </div>  
    </div>   
   
  )
  return (
    <>
    <div className='homepage-about' id='homepage-about'>
         <div  className='homepage-about-container'>
            <h2 className='homepage-about-left'  data-aos="fade-down" data-aos-duration="3000">
            ОАО «Барановичский завод станкопринадлежностей» — производитель универсальной зажимной технологической оснастки, необходимой для комплектации металлорежущих станков токарной, фрезерной, сверлильной и строгальной групп, а также узлов и деталей для автомобильной и тракторной техники.
            </h2>
            <div  className='homepage-about-right' data-aos="fade-up" data-aos-duration="3000">
              <h3>
                Производим и продаем универсальную зажимную технологическую оснастку для токарных, фрезерных, сверлильных и строгальных станков, а также узлы и детали для автомобильной и тракторной техники.
              </h3>
              <h3 >Благодаря надежности и долговечности, технологическая оснастка Барановичского завода станкопринадлежностей завоевала высокую репутацию среди ведущих станкостроительных и машиностроительных предприятий СНГ и Балтии</h3>
                <Link id='homepage-about-right-button'to='/catalog/Патроны%20токарные'>Наш каталог +</Link>               
            </div>  
         </div>  
    </div> 
 
      <HomepagePretty/>

  
    <div className='homepage_history'>     
        <h2>Начинался завод с маленькой артели «Красный металлист», которая была создана в апреле 1946 года.</h2>
        <div className='homepage_history_infographic'>
          <div  className='homepage_history_item item_left'>
          <p data-aos="fade-up" data-aos-duration="3000"><h2>31 декабря 1955 года </h2>приказом министра станкостроительной и инструментальной промышленности СССР на базе артели «Красный металлист» был образован завод станкопринадлежностей.</p>
          <p></p>
          <p data-aos="fade-up" data-aos-duration="3000"><h2>1975-1985</h2> годы качественного переоснащения завода на базе самой передовой техники – станков с ЧПУ.</p>
          <p></p>
          <p data-aos="fade-up" data-aos-duration="3000"><h2>В 2007 году</h2>  завод также стал лауреатом конкурса «Лучшие товары Республики Беларусь» в номинации «Продукция производственно-технического назначения»</p>
          </div>
          <div className='homepage_history_infographic_border'></div>
          <div className='homepage_history_item item_right'>
          <p></p>
          <p data-aos="fade-up" data-aos-duration="3000"><h2>В 1974 году</h2>  начался третий этап реконструкции – строительство блока вспомогательных цехов.</p>
          <p></p>
          <p data-aos="fade-up" data-aos-duration="3000"><h2>В 2003 году</h2> завод принял участие в конкурсе на соискание премии Брестского исполнительного комитета был вручен диплом победителя за достижения в области качества. </p>
          </div>
        </div>
        <h2>В последние годы руководство завода наладило прочные деловые связи с руководством Минского тракторного завода, Минского автомобильного завода. Завод получил заказ на изготовление крупными сериями  узлов и деталей для автомобильной и тракторной техники.</h2>
    
    </div>
    </>
        
  );
}
export default HomepageProduction;
