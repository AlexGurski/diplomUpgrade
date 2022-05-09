import React, { useEffect, useState } from 'react';
import '../assets/style/autorization.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const auto = firebase.database().ref('users/');


const Autorization = (props) => {

  useEffect(()=>{
    auto.on('value',()=>{});
  },[])
  
 const [text,setText] = useState('');
 const [login, setLogin] = useState('')
 const [password, setPassword] = useState('')
 const [display, setDisplay] = useState({display:'block'})

  const checkin = (login, password) => {
    let user = {}
    auto.orderByKey().on("child_added", snapshot => { 
      if (snapshot.val().login === login){
        if (snapshot.val().password === password){
          auto.off("value")
          user = snapshot.val()
          setDisplay({display:'none'})
          return snapshot.val().permission
        }
        else {
            user = 'Не верный пароль'
          }
      } else{
        user =  'Не верный пароль'
      };
   });
  typeof user ==='object'?setText('Добро пожаловать '+login):setText(user);
   auto.off("value");
   return user
  }
  return (
    <div className='autorization' style={display}>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" onChange={e=>setLogin(e.target.value)}/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" onChange={e=>setPassword(e.target.value)}/>
            <label>Password</label>
            <span style={{color:'red'}}>{text}</span>
          </div>
         
          <a href="#" onClick={()=>props.onAutorization(checkin(login,password))} > 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  )
  
}
export default Autorization 
