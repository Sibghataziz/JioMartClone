import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import  {store } from './Redux/store'
import ContextProvider from './Context/ContextProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

