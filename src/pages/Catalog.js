import React,{useState,useEffect} from 'react';
import '../assets/style/catalog.css';
import 'firebase/compat/database';
import { Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


   const Category = ({name,image})=>{
     return (     
    <div className='catalog-product'>
       {image!=undefined ? <img src={require ('./../assets/img/product/'+image)}/>:<img/>} 
       <span>{name}</span>
    </div>
  )
   }

const Catalog = (db) => {  

    const [state, setState] = useState([]);

    useEffect(()=>{
      AOS.init();
    },[])
    
    useEffect(()=>{
      setState(db.db) 
    },[db])

  return (
    <div className='body'>
    <div id="wrapper">
    <div id="container">

        <section className="open-book">
            <header>
                <h1>БЗСП</h1>
                <h6>Барановичи</h6>
            </header>
            <article>
                <h2 className="chapter-title">Наши товары</h2>
                <div className='catalog-catalog'>        
       {
        Object.keys(state).map(el=>
              <Link to={`/catalog/${el}`} key={el}  data-aos="zoom-in" data-aos-duration="2500">
                <Category  name={el} image={state[el].image}/>
               </Link>
        )
      }
      </div>
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

    </div>
</div>
</div>
  );
}
export { Catalog } 
