import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";
import '../stylesheets/style.scss'

import './vendor/what-input'
import './vendor/foundation'

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ),
    document.getElementById('root')
);