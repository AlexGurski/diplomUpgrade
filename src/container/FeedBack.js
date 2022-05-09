import React, { useEffect, useState } from 'react';
import Modal from './modalSend'
import '../assets/style/product.css';
function FeedBack(props) {
  useEffect(()=>{
    console.log(props.element)
  },[])

 
  const [modal,setModal]=useState(false)
    return (
      <>
    {modal?<Modal  onModalClose={()=>{setModal(!modal)}} state={modal} productName={props.element}/>:undefined}
    <div className="letter-image" onClick={()=>setModal(!modal)}>
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context"></div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>

    </>
    )
}
export default FeedBack;
