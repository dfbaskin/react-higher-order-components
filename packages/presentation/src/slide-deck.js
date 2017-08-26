import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';

import * as slides from './slides';

export class SlideDeckComponent extends PureComponent {

    slides = [
        { exact: true, path: '/', component: slides.TitleSlide },
        { path: '/about-me', component: slides.AboutMeSlide },
    ].map((slide, idx) => ({
        ...slide,
        key: `slide-${idx}`
    }));

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (evt) => {
        switch(evt.key) {
            case "ArrowLeft":
                this.selectSlide(-1);
                break;
            case "ArrowRight":
                this.selectSlide(1);
                break;
            default:
                break;
        }
    };

    selectSlide(offset) {
        const {slides} = this;
        const {history} = this.props;
        let slideIndex = slides.findIndex((slide) => {
            return slide.path === history.location.pathname;
        });
        if(slideIndex !== -1) {
            slideIndex = (slideIndex + slides.length + offset) % slides.length;
            history.push(slides[slideIndex].path);
        }
    }

    render() {
        const slideRoutes = this.slides.map((routeProps) => (
            <Route {...routeProps} />
        ));
        return (
            <div className="slide-deck">
                {slideRoutes}
            </div>
        );
    }
}

export const SlideDeck = withRouter(SlideDeckComponent);
