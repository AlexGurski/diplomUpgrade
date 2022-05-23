import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context';
import { ParallaxProvider } from 'react-scroll-parallax';
//импорт библтотек
ReactDOM.render(
     <UserProvider>
          <BrowserRouter>
               <ParallaxProvider>
                    <App/>
               </ParallaxProvider>
          </BrowserRouter>
     </UserProvider>
     ,document.getElementById('root'),
);
//рендер элементов. браузер это навигация по app.




