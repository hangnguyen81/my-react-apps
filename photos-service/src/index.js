import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter as Router} from "react-router-dom";
import { PhotoContextProvider } from './photoContext';
import App from './App';

ReactDOM.render(
  <PhotoContextProvider>
    <Router>
      <App />
    </Router>
  </PhotoContextProvider>,
  document.getElementById('root')
)