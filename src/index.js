import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './containers/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

ReactDOM.render(<Portfolio />, document.getElementById('app'));