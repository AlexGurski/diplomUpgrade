import React, { useEffect, useState, useContext } from 'react';
import './assets/style/admin.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { UserContext} from './context';
import { nowTime } from './container/dateTime';
const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('feedback');
const ref = firebase.database().ref('catalog/');
const newsDB = firebase.database().ref('news/');


let now = new Date().toLocaleDateString()

export const UserAccount = ({display}) => {
  
  const {accountName,setAccountName} = useContext(UserContext) 
  const [feedback, setFeedback] = useState([])
  const [styleUser,setStyleUser] = useState(display)

useEffect(()=>{
  setStyleUser(display);
  database.on('value', snap =>{ 
    console.log()
    setFeedback(Object.keys(snap.val()).map((e)=>{
      console.log(accountName.name)
       if (e.includes(accountName.name)) {return snap.val()[e]} 
    }).filter(el=>{
      if (el!==undefined){return el}
    }))  
   // setFeedback(snap.val())    
  }) 
},[display])
  console.log(accountName)

  return (
   <div className='all_userAccount' style={display}>

     <div className='all_userAccount_menu'>
       <span>Заказы</span>
       <span onClick={()=>{
         nowTime()
       }}>Заявки</span>
       <span>Избранное</span>
       <span>Профиль</span>
     </div>
     <div className='all_userAccount_content'>
       <h1>{accountName.name}</h1>
       <div>
       {Object.keys(feedback).map((el)=>
          <div   key={el} >
            <span>{feedback[el].text}</span>         
            <h5>{feedback[el].id}</h5>
            <h5>{feedback[el].response===undefined?'Не просмотренно':
                  feedback[el].response==1?'Просмотренно':
                  feedback[el].response==2?'Принято':
                  feedback[el].response==0?'Отказано':
                  undefined
            }</h5>
          </div>)}
        </div>
     </div>
   </div> 
  );
}