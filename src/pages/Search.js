import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../assets/style/productions.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useParams} from 'react-router-dom'



const search = (text, db,props)=>{ //функция поиска по бд введенного значения
  const rez = []
      db.forEach(el=>{
            Object.keys(el).map(item=>{
              if (item.toLowerCase().indexOf(text.toLowerCase())>-1 && item!='image'){
                rez.push({[item]:el[item]})
               
              }
            })
        });
        return rez
}


const Search = (props) => {

  const {id} =  useParams();
  const [array, setArray]= useState([]) //инициализация хука состояния

  useEffect(()=>{ //хук который вызывается при рендере страницы. в нем берутся данные из бд и заносятся в хук состояния
    let arr1=[]
    firebase.database().ref('catalog/').orderByKey().on("child_added", function(snapshot) { //обращение к бд к наследникам в таблице каталог
      arr1.push(snapshot.val())
      setArray(arr1)//запись состояния

   }, function (error) {
      console.log("Error: " + error.code);
   });
  },[])
  
  return  <div className='product-container'>
  <div className='productions-show-container'>
  <div className='productions-show'>
    {search(id,array).length===0?<div style={{height:'30vh'}}>"{id}" не найдено</div>:undefined}
  {

     search(id,array, props).map(el=>{
      
      return(
        <Link to={`/catalog/${el[Object.keys(el)].key}/${Object.keys(el)}`}  key={Object.keys(el)}> {/* ссылка для перехода на страницу продукта */}
                <div className='productions-show-item'>{el.image}
                  {
                   el[Object.keys(el)].image!=undefined ? <img key={el[Object.keys(el)].image.picture}src={require ('./../assets/img/product/'+el[Object.keys(el)].image.picture)}/>:<img/>
                  } 
                  {
                  Object.keys(el)
                  }
                  {
                   el[Object.keys(el)].notation!=undefined? 
                    <>
                      <div className='productions-show-item-notations'>
                       { 
                       Object.keys(el[Object.keys(el)].notation).map(item=>
                          <div key={(item)}>
                            <span>{item}</span>
                            <span>{ el[Object.keys(el)].notation[item]}</span>
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
  
}
export { Search } 
