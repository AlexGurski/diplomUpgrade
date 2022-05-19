import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDownward} from "react-icons/md";
import Modal from './../container/modalSend'
import {LineBlockHeadOfPage} from './lineBlockHeadOfPage'

import AOS from 'aos';
import 'aos/dist/aos.css';

function HomepageFirst() {
  useEffect(()=>{
    AOS.init();
  },[])

  const [modal,setModal]=useState(false)

  return (
    <div className='homepage-first'>
      <h1>КТО   МЫ</h1>
      <LineBlockHeadOfPage page='homepage'/>
    </div>
    )
}
export default HomepageFirst;
