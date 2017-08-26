import React, { PureComponent } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SlideDeck} from './slide-deck';

export class App extends PureComponent {

    render() {
        return (
            <BrowserRouter>
                <SlideDeck />
            </BrowserRouter>
        );
    }
}
