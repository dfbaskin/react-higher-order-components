import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';

import {TitleSlide} from './slides/title-slide';
import {AboutMeSlide} from './slides/about-me-slide';

export class SlideDeckComponent extends PureComponent {

    slides = [
        { exact: true, path: '/', component: TitleSlide },
        { path: '/about-me', component: AboutMeSlide },
    ];

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

        const slideRoutes = this.slides.map((slideProps, idx) => {
            const routeProps = {
                ...slideProps,
                key: `route-${idx}`
            };
            return (
                <Route {...routeProps} />
            )
        });

        const divProps = {
            className: "slide-deck",
        };

        return (
            <div {...divProps}>
                {slideRoutes}
            </div>
        );
    }
}

export const SlideDeck = withRouter(SlideDeckComponent);
