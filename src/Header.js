import React, { useState } from "react";
import "./assets/style/style.css"
import {Link, Outlet}  from 'react-router-dom'

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
                                    <li><Link to="/admin" onClick={()=>setCheck(!check)}>Личный кабинет</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
                
const Header = () => {
    return(
        <>
            <div className="header">
                <div className="header_text">
                    Alex Gurski
                </div>
                <Menu/>
            </div>
            <Outlet/>
        </>
    )
}

export {Header} ;
export {Menu} ;