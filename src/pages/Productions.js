import React,{useState,useEffect} from 'react';
import '../assets/style/productions.css';
import { Link} from 'react-router-dom'
import 'firebase/compat/database';
import { useParams} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Productions = (db) => {
const {id} =  useParams();

const [productName, setProductName]=useState([])
const [productList, setProductList]=useState([])

useEffect(()=>{
  AOS.init();
},[])

useEffect(()=>{
  setProductList(Object.keys(db.db))
  db.db[id] !=undefined ? setProductName(db.db[id]):setProductName([])
},[db.db[id]])

  return (
    
    <div className='productions'>  
    <p className="text" lang="ru">
      {id}
    </p>
    <div className='productions-container'>
    <div className='productions-list'>
      {
        productList.map(el=>
          <Link to={`/catalog/${el}`}  key={el} >
              <div lang="ru">{el}</div>
          </Link>
        )
      }
      </div>  
      <div className='productions-show-container'>
      <div className='productions-show'>
        { 
           Object.keys(productName).map(el=>{
            console.log(productName) 
            return(
              el=='image'?undefined:
              <Link to={`/catalog/${id}/${el}`}  key={el} data-aos="zoom-in" data-aos-duration="1500">
                <div className='productions-show-item'>{el.image}
                  {
                   productName[el].image!=undefined ? <img src={require ('./../assets/img/product/'+productName[el].image.picture)}/>:<img/>
                  } 
                  {el}
                  {
                   productName[el].notation!=undefined? 
                    <>
                      <div className='productions-show-item-notations'>
                        {
                        Object.keys(productName[el].notation).map(item=>
                          <div>
                            <span>{item}</span>
                            <span>{productName[el].notation[item]}</span> 
                          </div>
                          )
                        }
                      </div>
                    </>
                    :undefined
                  }                  
                </div>
              </Link>
            )
           }
           )   
        }
      </div>  
      </div>
    </div>
        
    </div>
  );
}
export { Productions } 
