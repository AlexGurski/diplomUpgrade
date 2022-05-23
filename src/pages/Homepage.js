import React from 'react';
import '../assets/style/homepage-style.css';
import HomepageFirst from '../container/HomepageFirst'
import HomepageContacts from '../container/HomepageContacts'
import HomepageProduction from '../container/HomepageProduction'
const Homepage = () => {
  return (
    <div className='body-main'>   
       <HomepageFirst/>
       <HomepageProduction/>
       <HomepageContacts/>
    </div>
   
  );
}
export { Homepage } 
