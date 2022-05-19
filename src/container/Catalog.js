import React,{useState,useEffect} from 'react';
import '../assets/style/productions.css';
import 'firebase/compat/database';
import { Link} from 'react-router-dom'

   const Category = ({name,image})=>{
     return (     
    <div className='production_catalog_product'>
       {image!=undefined ? <img src={require ('./../assets/img/product/'+image)}/>:<img/>} 
       <span>{name}</span>
    </div>
  )
   }

const Catalog = ({db}) => {  

    const [state, setState] = useState([]);
    
    useEffect(()=>{
      setState(db.db) 
    },[db])

  return (
    <div className='production_catalog'>
       
       {
        Object.keys(state).map(el=>
              <Link to={`/catalog/${el}`} key={el}>
                <Category  name={el} image={state[el].image}/>
               </Link>
        )
      }
  
</div>
  );
}
export { Catalog } 
