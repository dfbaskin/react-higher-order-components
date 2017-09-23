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
        path: "/value-props",
        component: examples.ValuePropsParent,
        desc: "Value Props"
    },
    {
        path: "/array-props",
        component: examples.ArrayPropsParent,
        desc: "Array Props"
    },
    {
        path: "/object-props",
        component: examples.ObjectPropsParent,
        desc: "Object Props"
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
        path: "/composed-functions-layout",
        component: examples.ComposedFunctionsLayoutParent,
        desc: "Composed Layout w/Functions"
    },
    {
        path: "/fixed-test-pattern",
        component: examples.FixedTestPattern,
        desc: "Fixed Test Pattern"
    },
    {
        path: "/test-pattern-layout",
        component: examples.TestPatternLayout,
        desc: "Test Pattern in Layout"
    },
    {
        path: "/dynamic-test-pattern",
        component: examples.DynamicTestPatternParent,
        desc: "Dynamic Test Pattern"
    },
    {
        path: "/simple-hoc",
        component: examples.SimpleHocList,
        desc: "Simple Higher-Order Component"
    },
    {
        path: "/test-pattern-hoc",
        component: examples.DynamicTestPatternComposed,
        desc: "Test Pattern HOC"
    },
    {
        path: "/rectangles-hoc",
        component: examples.DynamicRectanglesComposed,
        desc: "Rectangles HOC"
    },
    {
        path: "/i18n",
        component: examples.InternationalizationProvider,
        desc: "i18n"
    },
    {
        path: "/pantry-app",
        component: examples.PantryApp,
        desc: "Pantry App"
    },
    {
        path: "/without-hocs",
        component: examples.WithoutHocsExample,
        desc: "Without HOCs"
    },
];

export const App = (props) => {
    return (
        <Router>
            <Layout routes={routes} />
        </Router>
    );
};
