import React, { useEffect, useState } from 'react';
import "../assets/style/homepage-style.css"
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {Link as Linka} from 'react-scroll'

export function LineBlockHeadOfPage(props) {

    return (
    <div className="all_line" >
        <div>
            <Link to='/contacts'className='all_line_arrow'><HiOutlineArrowNarrowLeft/></Link> 
            <div>Контакты</div>
        </div>
        <Linka to="homepage-about"  duration={2000} spy={true} smooth={true} className='all_line_center'>Прокрутите страницу</Linka>
        <div>
                <div>Каталог</div>
                <Link to='/catalog/Патроны%20токарные'className='all_line_arrow'><HiOutlineArrowNarrowRight/></Link>
        </div>
    </div>

    )
}
