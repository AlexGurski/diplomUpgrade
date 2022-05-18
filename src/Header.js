import React, { useEffect, useState, useContext  } from "react";
import "./assets/style/header-style.css"
import {Link, Outlet}  from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import { UserContext } from "./context";
const Menu =(props) =>{
    const [check, setCheck] = useState(false);
   
    return (
                <div className="menu-wrap">                    
                    <input type="checkbox" className="toggler" checked={check} defaultChecked={false} onChange={()=>setCheck(!check)}/>                                      
                    <div className="hamburger">{props.name}<div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/" onClick={()=>setCheck(!check)}>Главная</Link></li>
                                    <li><Link to="/catalog" onClick={()=>setCheck(!check)}>Каталог</Link></li>
                                    <li><Link to="/about" onClick={()=>setCheck(!check)}>О комании</Link></li>
                                    <li><Link to="/news" onClick={()=>setCheck(!check)}>Новости</Link></li>
                                    <li><Link to="/contacts" onClick={()=>setCheck(!check)}>Контакты</Link></li>
                                    <li><Link to="/account" onClick={()=>setCheck(!check)}>Личный кабинет</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
                
const Header = () => {

    const {accountName,setAccountName} = useContext(UserContext) 

    return(
        <>
            <div className="header">
               
                   {accountName.name!==''?
                  
                    <Link to='/order' className="header_box" ><FiShoppingCart className="header_box "/><span className="header_box_count">{accountName.purshise.length}</span></Link>
                  
                   :undefined}
                {/* <img src={require('./assets/img/logo1.png')}/> <span>ОАО «Барановичский завод станкопринадлежностей»</span>*/}
             
                <Menu/>
            </div>
            <Outlet/>
        </>
    )
}

export {Header} ;
export {Menu} ;