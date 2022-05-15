import React, { useEffect, useState } from 'react';
import "../assets/style/homepage-style.css"
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'
export function LineBlockHeadOfPage(props) {

    return (
    <div className="all_line" >
     <div className='all_line_arrow'><HiOutlineArrowNarrowLeft/></div>
     <div className='all_line_center'>Прокрутите страницу</div>
     <div className='all_line_arrow'><HiOutlineArrowNarrowRight/></div>
    </div>

    )
}
