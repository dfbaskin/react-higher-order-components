import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import {App} from './app';

require('prismjs');
require('prismjs/themes/prism.css');

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
