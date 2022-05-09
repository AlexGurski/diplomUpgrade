import React,{useState,useEffect} from 'react';
import '../assets/style/productions.css';
import '../assets/style/about.css';
import FeedBack from '../container/FeedBack'
import firebaseConfig from '../container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {AboutCompany, OurPossibility} from '../container/aboutContainer'


const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('about');

   const List = (props)=>{
     const [state, setState]=useState([])
     
    useEffect(()=>{
      database.on('value', snap =>{  
        setState(snap.val())     
    }) },[])

     return (     
    <div className='productions-list' >
      {state.map(el=><p onClick={()=>{props.onChangeList(el)}} key={el}>{el}</p>)}
    </div>
  )
   }

const About = () => {
  const [name, setName] = useState('О компании')
  return (
    <div className='productions'>   
    <FeedBack /> 
      <div className='productions-container'>
        <List onChangeList={(name)=>{setName(name)}} state={name}/>
        <div className='about-show-container'>
            <div className='about-show'>
             {name==='О компании'?<AboutCompany/>:undefined }
             {name==='Наши возможности'?<OurPossibility/>:undefined }
            </div>  
        </div>
      </div>
        
    </div>
   
  );
}
export { About } 
