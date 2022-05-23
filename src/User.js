import React, { useEffect, useState, useContext } from 'react';
import './assets/style/admin.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { UserContext} from './context';
const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('feedback');

export const UserAccount = ({display}) => {
  
  const {accountName,setAccountName} = useContext(UserContext) 
  const [feedback, setFeedback] = useState([])
  const [styleUser,setStyleUser] = useState(display)
  const [userOrder, setUserOrder] = useState([])
  const [likes, setLikes] = useState([]);
  const [menuItem, setMenuItem] = useState({
    order:{display:'none'},
    feedback:{display:'none'},
    likes:{display:'none'},
    profile:{display:'none'}
  })

useEffect(()=>{
  setStyleUser(display);
  database.on('value', snap =>{ 
    setFeedback(Object.keys(snap.val()).map((e)=>{
       if (e.includes(accountName.name)) {return snap.val()[e]} 
    }).filter(el=>{
      if (el!==undefined){return el}
    }))  
   // setFeedback(snap.val())    
  }) 

  app.database().ref(`order/${accountName.name}/`).on('value', snap =>{
    setUserOrder(snap.val())
  })

  app.database().ref(`users/${accountName.name}/likes`).on('value', snap =>{
    setLikes(snap.val())
  })

},[display])

const choiseMenu = (menu) =>{
  if (menu==='feedback'){
    setMenuItem({
      order:{display:'none'},
      feedback:{display:'block'},
      likes:{display:'none'},
      profile:{display:'none'}
    })
  }
  if (menu==='order'){
    setMenuItem({
      order:{display:'block'},
      feedback:{display:'none'},
      likes:{display:'none'},
      profile:{display:'none'}
    })
  }
  if (menu==='likes'){
    setMenuItem({
      order:{display:'none'},
      feedback:{display:'none'},
      likes:{display:'block'},
      profile:{display:'none'}
    })
  }
  if (menu==='profile'){
    setMenuItem({
      order:{display:'none'},
      feedback:{display:'none'},
      likes:{display:'none'},
      profile:{display:'flex'}
    })
  }
}
  return (
    <>
    {accountName.name!==''?
    <div className='all_userAccount'  style={display}>

     <div className='all_userAccount_menu'>
       <span onClick={()=>{choiseMenu('order')}}>Заказы</span>
       <span onClick={()=>{choiseMenu('feedback')}}>Заявки</span>
       <span onClick={()=>{choiseMenu('likes')}}>Избранное</span>
       <span onClick={()=>{choiseMenu('profile')}}>Профиль</span>
     </div>
     <div className='all_userAccount_content'>
       <h1>{accountName.name}</h1>
       <div name='заявки' className='all_userAccount_content_feedback' style={menuItem.feedback}>
       {feedback? Object.keys(feedback).map((el)=>
          <div   key={el} >
            <span>{feedback[el].text}</span>         
            <h5>{feedback[el].id}</h5>
            <h5>{feedback[el].response===undefined?'Не просмотренно':
                  feedback[el].response==1?'Просмотренно':
                  feedback[el].response==2?'Принято':
                  feedback[el].response==0?'Отказано':
                  undefined
            }</h5>
          </div>):undefined}
        </div>
        <div name='заказы' className='all_userAccount_content_order' style={menuItem.order}>
       { userOrder? Object.keys(userOrder).map((el)=>
       <div key={el}>
         Заказ от {el}
          {Object.values(userOrder[el]).map(e=>   
          <div>        
            {Object.values(e)[0].image? <img src={require('./assets/img/product/'+Object.values(e)[0].image.picture)}/>:undefined}
            <div>
              <h2>{Object.keys(e)}</h2>
              <h3>{Object.values(e)[0].key}</h3>
            </div>
            </div>  
          )}          
       </div>
          ):undefined}
        </div>
        <div name='избранное' className='all_userAccount_content_likes' style={menuItem.likes}>
       {likes?
       Object.keys(likes).map((el)=>
          <div   key={el} >
            {likes[el].image? <img src={require('./assets/img/product/'+likes[el].image.picture)}/>:undefined}
            <div>
              <h2>{el}</h2>            
              <div>{likes[el].discription.map(e=><p>{e}</p>)}</div>
            </div>
          </div>
          ):undefined }
        </div>
        <div className='all_userAccount_content_profile' style={menuItem.profile}>
          <div>
            <h2>Пароль</h2>
          <span><input type='text'/>Введите старый пароль</span>
           <span> <input type='text'/>Введите новый пароль</span>
           <span><input type='text'/>Повторите новый пароль</span>
           <input type='button' value='Сохранить пароль'/>
          </div>
          <div>
          <h2>Личная информация</h2>
          <span> <input type='text'/>Введите название своей организации</span>
          <span><input type='text'/>Введите свой email</span>
          <span>  <input type='text'/>Введите свой номер телефона</span>
          <input type='button' value='Сохранить информацию'/>
          </div>
           <span className='checkOut' onClick={()=>window.location.reload()}>Выйти из профиля</span>
        </div>
     </div>
   </div>:undefined
   
  }
  </>
  );
}