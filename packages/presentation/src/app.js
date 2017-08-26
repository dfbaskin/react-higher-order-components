import React, { PureComponent } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {TitleSlide} from './slides/title-slide';
import {AboutMeSlide} from './slides/about-me-slide';

export class App extends PureComponent {

    slides = [
        { exact: true, path: '/', component: TitleSlide },
        { path: '/about-me', component: AboutMeSlide },
    ];

    render() {
        const slideRoutes = this.slides.map((slideProps, idx) => {
            const routeProps = {
                ...slideProps,
                key: `route-${idx}`
            };
            return (
                <Route {...routeProps} />
            )
        });

        return (
            <BrowserRouter>
                <div className="slide-deck">
                    {slideRoutes}
                </div>
            </BrowserRouter>
        );
    }
}
