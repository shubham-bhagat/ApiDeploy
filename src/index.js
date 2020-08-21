import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from './App';
//import NavBar from './components/navbar.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>   
    <App/>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

serviceWorker.register();
