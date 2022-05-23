import React, { useEffect, useState } from 'react';
import './assets/style/admin.css';
import firebaseConfig from './container/base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {MdOutlineCancel} from "react-icons/md";
import {IoIosEye} from "react-icons/io";
import {BsEyeSlashFill} from "react-icons/bs"
import {GrStatusGood} from "react-icons/gr"
const app = firebase.initializeApp(firebaseConfig);
const database = app.database().ref('feedback');
const ref = firebase.database().ref('catalog/');
const newsDB = firebase.database().ref('news/');

let now = new Date().toLocaleDateString()

export const Admin = ({display}) => {
  const [styleAdmin,setStyleAdmin] = useState({display:'none'})
  useEffect(()=>{
    setStyleAdmin(display)
  },[display])
  const [feedback, setFeedback] = useState([])
  const [news, setNews] = useState({
    name:'',
    text:{},
    short:'',
    image:'',
    date:now
  })

  const [adminChoise, setAdminChoise] = useState({
    catalog:{display:'none'},
    feedback:{display:'none'},
    news:{display:'none'},
    users:{display:'none'},
  })
  const [type, setType] = useState('Гантели сборные РГ6М, РГ15М');
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState([]);
  const [notationName, setNotationName] = useState('');
  const [notationValue, setNotationValue] = useState('');
  const [picture, setPicture] = useState('');
  const [plan, setPlan] = useState('');
  const [pdf, setPdf] = useState('');
  const [video, setVideo] = useState('');
  const [textar, setTexta] = useState('');
  const [dataBase, setDataBase] = useState([]);
  const [dataBase1, setDataBase1] = useState([]);
  const [editType, setEditType] = useState('');





  useEffect(()=>{
    console.log(now)
    database.on('value', snap =>{   
      setFeedback(snap.val())    
    }) 
    newsDB.on('value', snap =>{   
      setNews(snap.val())   
    }) 

    ref.on("value", function(snapshot) {
      setDataBase(Object.keys(snapshot.val()) )
      setDataBase1(snapshot.val() )
   }, function (error) {
      console.log("Error: " + error.code);
   });
    
  },[])

  const textToArray = (text) => {
    console.log(text.split('\n'))
  }
const addToDB = ()=>{

  let qwerty = ()=> {
    let qwer = {}

    
    if (discription){
      qwer[name]={...qwer[name],
        discription:discription, 
      }
    }
  
    if (type){
      qwer[name]={...qwer[name],
        key:type, 
    }
  }
  
  if (picture){
    qwer[name]={...qwer[name],
      image:{
        picture:picture
      }
    }
  }
 
  if (plan){
    qwer[name]={...qwer[name],
      image:{
        ...qwer[name].image,
        plan:plan
      }
    }
  }
  
 if (pdf){
      qwer[name]={...qwer[name],
        image:{
          ...qwer[name].image,
          pdf:pdf
        }
      }
 } 

if (video) {
  qwer[name]={...qwer[name],
    image:{
      ...qwer[name].image,
      video:video
    }
  }
} 
if (notationName){
  qwer[name]={...qwer[name],
    notation:{
      [notationName]:notationValue
    }
  }
}
return qwer
  }
     
  firebase.database().ref('catalog/'+type+'/').update(qwerty())
    console.log(qwerty()) 
    
}

const responsibleColor = (color)=>{
  if (color===0) return {backgroundColor:'red', color:'black'}
  if (color===1) return {backgroundColor:'yellow', color:'black'}
  if (color===2) return {backgroundColor:'green', color:'black'}
}
const [box, setBox]=useState()

const responsed = (e, clickY, clickX) =>{
  setBox(
    <>
    <div className='choiseBox'style={{backgroundColor:'red', position:'fixed', top:clickY-15, left:clickX+30}} 
    onClick={()=>{
                  firebase.database().ref('feedback/'+e+'').update({response:0});
                  setBox('')}}>
       <BsEyeSlashFill color="black" fontSize="1.5em" /> 
    </div>
    <div className='choiseBox'style={{backgroundColor:'yellow', position:'fixed', top:clickY-15, left:clickX-65}} 
    onClick={()=>{
      firebase.database().ref('feedback/'+e+'').update({response:1});
      setBox('')}}>
      <IoIosEye color="black" fontSize="1.5em" /> 
    </div>
    <div className='choiseBox'style={{backgroundColor:'green', position:'fixed', top:clickY-60, left:clickX-20}} 
    onClick={()=>{
      firebase.database().ref('feedback/'+e+'').update({response:2});
      setBox('')}}>
      <GrStatusGood color="black" fontSize="1.5em" /> 
    </div>
    <div className='choiseBox'style={{backgroundColor:'white', position:'fixed', top:clickY+25, left:clickX-20}} 
    onClick={()=>{
      setBox('')}}>
      <MdOutlineCancel color="black" fontSize="1.5em" />  
    </div>
  </>
  )
}
  return (
    <>
    <div className='all_userAccount' style={styleAdmin}>
    <div className='all_userAccount_menu'>
       <span onClick={()=>{setAdminChoise({catalog:{display:'flex'}, feedback:{display:'none'}, news:{display:'none'}, users:{display:'none'}})}}>Каталог</span>
       <span onClick={()=>{setAdminChoise({catalog:{display:'none'}, feedback:{display:'block'}, news:{display:'none'}, users:{display:'none'}})}}>Заявки</span>
       <span onClick={()=>{setAdminChoise({catalog:{display:'none'}, feedback:{display:'block'}, news:{display:'none'}, users:{display:'none'}})}}>Заказы</span>
       <span onClick={()=>{setAdminChoise({catalog:{display:'none'}, feedback:{display:'none'}, news:{display:'flex'}, users:{display:'none'}})}}>Новости</span>
       <span onClick={()=>{setAdminChoise({catalog:{display:'none'}, feedback:{display:'none'}, news:{display:'none'}, users:{display:'flex'}})}}>Пользователи</span>
     </div>

      {box}
    <div  className='admin-catalog' style={adminChoise.catalog}> 
    <select onChange={e=>setEditType(e.target.value)}>
       <option>Добавить</option>
       <option>Редактировать</option>
       <option>Удалить</option>
      </select>

      тип

      <select onChange={e=>{ 
        setName('');
        setType(e.target.value);
        setPicture('');
        setPlan('');
        setPdf('');
        setVideo('');
        setNotationName('');
        setNotationValue('');
      }
        }>
       {dataBase.map(el=><option>{el}</option>)} 
      </select>

      имя

      {editType==='Редактировать' || editType==='Удалить'?      
      <select onChange={e=>{
        setName(e.target.value);
        setPicture('');
        setPlan('');
        setPdf('');
        setVideo('');
        setNotationName('');
        setNotationValue('');
        setDiscription(dataBase1[type][e.target.value].discription)
        setPicture(dataBase1[type][e.target.value].image.picture);
        setPlan(dataBase1[type][e.target.value].image.plan);
        setPdf(dataBase1[type][e.target.value].image.pdf);
        setVideo(dataBase1[type][e.target.value].image.video);
        setNotationName(Object.keys(dataBase1[type][e.target.value].notation))
        setNotationValue(dataBase1[type][e.target.value].notation[1])
        }}>
       <option selected >Выберите продукт</option>
        {dataBase1[type]!=undefined?
          Object.keys(dataBase1[type]).map(e=>e!='image'?<option>{e}</option>:undefined)
          :undefined
        }               
      </select>:undefined  
    }
   {editType!=='Редактировать'&& editType!=='Удалить'? <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>:undefined}

    Описание

   {editType==='Редактировать'|| editType==='Удалить'? discription.map((el,index)=> 
       <textarea  defaultValue={el} onChange={(e) =>{
        let disc = discription;
        disc[index]=e.target.value;
        setDiscription(disc);
      //  console.log(discription)
       }}/>
      ):undefined}
     
  
     {editType!=='Редактировать'&& editType!=='Удалить'? 
       <input type='text'   onKeyPress={
        (e => {
          if (e.key==='Enter'){
            setDiscription([...discription, e.target.value])
            e.target.value=''
          }
        })
        } />
        :undefined 
    }
     
      Комплектация
      <input type='text'  value={notationName} onChange={(e) => setNotationName(e.target.value)} />
      <input type='text'  value={notationValue} onChange={(e) => setNotationValue(e.target.value)} />
      Изображение
      <input type='text'  value={picture} onChange={(e) => setPicture(e.target.value)} />
      Чертеж
      <input type='text'  value={plan} onChange={(e) => setPlan(e.target.value)} />
      PDF-файл
     
      <textarea  value={pdf} onChange={(e) => setPdf(e.target.value)}></textarea>
      Видео
      <input type='text'  value={video}  onChange={(e) => setVideo(e.target.value)} />
      {editType!=='Удалить'? <input type='button' onClick={()=>{addToDB(); setName(''); setNotationName(''); setNotationValue(''); setPicture(''); setPlan(''); setPdf(''); setVideo(''); setDiscription([])}} value='сохранить'/> :undefined} 
      {editType==='Удалить'?<input type='button' onClick={()=>firebase.database().ref('catalog/'+type+'/'+name).remove()} value='Удалить'/>:undefined}    
      
    </div>
    
      <div className='feedback' style={adminChoise.feedback}> 
          {Object.keys(feedback).reverse().map((el)=>
          <div  onClick={click=>responsed(el, click.clientY, click.clientX)} key={el} style={responsibleColor(feedback[el].response)}>
            <h2>{feedback[el].name}</h2>
            <h5>{feedback[el].organization}</h5>
            <p>{feedback[el].phone}</p>
            <span>{feedback[el].text}</span>
            <h3>{feedback[el].id}</h3>
          </div>)}
      </div>
      <div className='newsAdmin' style={adminChoise.news}>
         <div className='newsItem'>
           название
           <input type='text'   onChange={(e) => setTexta({...textar,name:e.target.value,date:now})} />
           краткое содержание
           <input type='text'   onChange={(e) => setTexta({...textar,short:e.target.value})} />
           текст новости
           <textarea onChange={(e)=>setTexta({...textar,text:e.target.value})}></textarea>
           изображение
           <input type='text'   onChange={(e) => setTexta({...textar,image:e.target.value})} 
           /> 
           <input type='button' onClick={()=>{newsDB.update({[Object.keys(news).length+1]:textar})}} value='сохранить'></input>
         </div>
      </div>
    </div>
</>  
  );
}