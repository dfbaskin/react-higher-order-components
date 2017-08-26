import React from 'react';
import './App.css';

import * as examples from './components';

export const App = (props) => {
    return (
        <div className="App">
            <div>
                <h2>React Higher Order Functions</h2>
            </div>
            <div>
                <examples.InternationalizationProvider />
            </div>
        </div>
    );
};


/* Examples

 <examples.Simple />
 <examples.SimpleStatelessParent />
 <examples.FixedLayout />
 <examples.ComposedLayoutParent />
 <examples.InternationalizationProvider />

 */
