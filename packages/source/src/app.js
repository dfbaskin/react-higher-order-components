import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Layout} from './layout';
import './app.css';

import * as examples from './components';

const routes = [
    {
        path: "/simple",
        component: examples.Simple,
        desc: "Simple"
    },
    {
        path: "/simple-stateless",
        component: examples.SimpleStatelessParent,
        desc: "Simple Stateless"
    },
    {
        path: "/fixed-layout",
        component: examples.FixedLayout,
        desc: "Fixed Layout"
    },
    {
        path: "/composed-layout",
        component: examples.ComposedLayoutParent,
        desc: "Composed Layout"
    },
    {
        path: "/i18n",
        component: examples.InternationalizationProvider,
        desc: "i18n"
    },
];

export const App = (props) => {
    return (
        <Router>
            <Layout routes={routes} />
        </Router>
    );
};
