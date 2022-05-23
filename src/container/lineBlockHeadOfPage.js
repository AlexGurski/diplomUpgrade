import React, { useEffect, useState } from 'react';
import "../assets/style/homepage-style.css"
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {Link as Linka} from 'react-scroll'


export function LineBlockHeadOfPage({page}) {
    const navigate = (page) =>{
        switch (page) {
            case 'homepage':
              return { 
                  link:'homepage-about',
                  prev:{
                  link:'/about',
                  name:'Контакты'
                    },
                    next:{
                        link:'/catalog/Патроны%20токарные',
                        name:'Каталог'
                    }
                }
            case 'catalog':
                return { 
                    link:'catalogs',
                    prev:{
                    link:'/',
                    name:'Главная'
                      },
                      next:{
                        link:'/news',
                        name:'Новости'
                    }
                  }
            case 'news':
                        return { 
                            link:'newss',
                            prev:{
                                link:'/catalog/Патроны%20токарные',
                                name:'Каталог'
                              },
                              next:{
                                  link:'/about',
                                  name:'Контакты'
                              }
                          } 
            case 'contacts':
                return { 
                    link:'contacts',
                    prev:{
                        link:'/news',
                        name:'Новости'
                        },
                    next:{
                        link:'/',
                        name:'Главная'
                    }
            }                
            default:
              alert( "Нет таких значений" );
          }
    }
    let lineNavigate = navigate(page)
 

    return (
    <div className="all_line" >
        <div>
            <Link to={lineNavigate.prev.link} className='all_line_arrow'><HiOutlineArrowNarrowLeft/></Link> 
            <div>{lineNavigate.prev.name}</div>
        </div>
        <Linka to={lineNavigate.link}  duration={2000} spy={true} smooth={true} className='all_line_center'>Прокрутите страницу</Linka>
        <div>
                <div>{lineNavigate.next.name}</div>
                <Link to={lineNavigate.next.link} className='all_line_arrow'><HiOutlineArrowNarrowRight/></Link>
        </div>
    </div>

    )
}
