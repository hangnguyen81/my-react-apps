import React from 'react';
import ReactDOM from 'react-dom';
//import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import {AppProvider} from './context';

import App from './App'

ReactDOM.render(
    <AppProvider>
        <App/>
    </AppProvider>,
document.getElementById('root'))