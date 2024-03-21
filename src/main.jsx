import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { BrowserRouter } from "react-router-dom";
import AppContextProvider from './components/context/appContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
