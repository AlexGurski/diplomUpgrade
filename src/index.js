import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
//импорт библтотек

ReactDOM.render(
     <BrowserRouter>
          <App/>
     </BrowserRouter>
     ,document.getElementById('root'),
);
//рендер элементов. браузер это навигация по app.




