import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import {Provider} from "react-redux";
import {appStore} from "./components/pantry/app-store";

import './index.css';

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root'));
