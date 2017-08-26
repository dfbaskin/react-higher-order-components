import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import * as slides from './slides';

export class SlideDeckComponent extends PureComponent {

    slides = [
        { path: '/title', component: slides.TitleSlide },
        { path: '/about-me', component: slides.AboutMeSlide },
        { path: '/hoc-definition', component: slides.HOCDefinitionSlide },
        { path: '/thanks', component: slides.PresentationSlide },
    ].map((slide, idx) => ({
        ...slide,
        key: `slide-${idx+1}`
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
        const {location} = this.props;
        const currentKey = location.pathname.split('/')[1] || '/';
        const timeout = { enter: 300, exit: 200 };
        const redirectRender = () => {
            const firstPath = this.slides[0].path;
            return (
                <Redirect to={firstPath} />
            );
        };
        return (
            <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames="fade">
                    <div className="slide-deck">
                        <Switch location={location}>
                            <Route exact path="/" render={redirectRender} />
                            {this.slides.map((slide) => (
                                <Route {...slide} />
                            ))}
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export const SlideDeck = withRouter(SlideDeckComponent);
