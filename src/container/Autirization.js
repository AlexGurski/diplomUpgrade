import React, { useEffect, useState,useContext } from 'react';
import '../assets/style/autorization.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Admin } from '../Admin';
import { UserAccount } from '../User';
import { UserContext } from '../context';
const auto = firebase.database().ref('users/');

export  const Autorization = () => {

  const {accountName,setAccountName} = useContext(UserContext) 

  useEffect(()=>{
    console.log(accountName)
    if (accountName.logined){
      setUserName({...accountName, logined:true})
      setDisplay({display:'none'})
          if(accountName.permission===2){setAdmin({display:'flex'})}
          if(accountName.permission===0){setUser({display:'flex'})}
    }
    auto.on('value',()=>{});
  },[])
  
 const [text,setText] = useState('');
 const [login, setLogin] = useState('')
 const [password, setPassword] = useState('')
 const [password2, setPassword2] = useState('')
 const [display, setDisplay] = useState({display:'flex'})
 const [admin,setAdmin]= useState({display:'none'})
 const [user,setUser]= useState({display:'none'})
const [userName,setUserName ]= useState('')
const [loginbox, setLoginbox] = useState({display:'block'})
const [regbox, setRegbox] = useState({display:'none'})

  const checkin = (login, password) => {
    let user = {}
    auto.orderByKey().on("child_added", snapshot => { 
      console.log(snapshot.val())
      if (snapshot.val().login === login){
        if (snapshot.val().password == password){
          auto.off("value")
          user = snapshot.val()
          setUserName(snapshot.val())
          setDisplay({display:'none'})          
          if(snapshot.val().permission===2){setAdmin({display:'flex'}); setAccountName({purshise:'',permission:2, logined:true, name:login})}
          if(snapshot.val().permission===0){setUser({display:'flex'}); setAccountName({purshise:'',permission:0, logined:true, name:login})}
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
  const registration = () => {
    let rez = true;
    if (password!==password2){setText('Пароли не совпадают')}
    else if (login==''){setText('Введите имя пользователя')}
    else {
      auto.orderByKey().on("child_added", snapshot => { 
        console.log(snapshot.val())
        if (snapshot.val().login === login){
          rez=false
        } 
       
     });
     if(rez){setText('Создан новый пользователь!')
     auto.update({[login]:{login:login, password:password, permission:0, likes:''}});
     setTimeout(() => {
      setDisplay({display:'none'}) 
      setUser({display:'flex'}); 
      setAccountName({purshise:'',permission:0, logined:true, name:login})
    }, 500);
    }
     else{
      setText('Такой пользователь уже существует')
     
     }
    }
    
  }
  return (
    <>
    <Admin display={admin} />
    <UserAccount display={user} user={userName}/>
   
    <div className='autorization' style={display}>
    
    <div className="login-box">
    <div className='regauth'>
      <span className='regauth_auth regauth_button' onClick={()=>{
        setLoginbox({display:'block'})
        setRegbox({display:'none'})
      }}>Авторизация</span>
      <span className='regauth_reg regauth_button' onClick={()=>{
        setLoginbox({display:'none'})
        setRegbox({display:'block'})
      }}>Регистрация</span>
    </div>
    <div className='login-box_container' style={loginbox}>
        <h2>Авторизация</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" onChange={e=>setLogin(e.target.value)}/>
            <label>Имя пользователя</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" onChange={e=>setPassword(e.target.value)}/>
            <label>Пароль</label>
            <span style={{color:'red'}}>{text}</span>
          </div>
         
          <a href="#" onClick={()=>checkin(login,password)} > 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Войти
          </a>
        </form>
    </div>
    <div className='login-box_container' style={regbox}>
        <h2>Регистрация</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" onChange={e=>setLogin(e.target.value)}/>
            <label>Имя пользователя</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" onChange={e=>setPassword(e.target.value)}/>
            <label>Пароль</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" onChange={e=>setPassword2(e.target.value)}/>
            <label>Повторите пароль</label>
            <span style={{color:'red'}}>{text}</span>
          </div>
         
          <a href="#" onClick={()=>{
            registration()
          }} > 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Регистрация
          </a>
        </form>
    </div>
    </div>
    </div>
    </>
  )
  
}
