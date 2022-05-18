import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context';
//импорт библтотек
ReactDOM.render(
     <UserProvider>
          <BrowserRouter>
                    <App/>
          </BrowserRouter>
     </UserProvider>
     ,document.getElementById('root'),
);
//рендер элементов. браузер это навигация по app.




