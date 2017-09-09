import React, { PureComponent } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import * as slides from './slides';

export class SlideDeckComponent extends PureComponent {

    slides = [
        { path: '/title', component: slides.TitleSlide },
        { path: '/about-me', component: slides.AboutMeSlide },
        { path: '/hoc-definition', component: slides.HOCDefinitionSlide },
        { path: '/composition', component: slides.CompositionSlide },
        { path: '/react-render', component: slides.ReactRenderSlide },
        { path: '/react-render-class-component', component: slides.ReactRenderClassComponentSlide },
        { path: '/react-render-functional-component', component: slides.ReactRenderFunctionalComponentSlide },
        { path: '/react-stateful-component', component: slides.ReactStatefulComponentSlide },
        { path: '/react-delegated-stateful-component', component: slides.ReactDelegatedStatefulComponentSlide },
        { path: '/value-props', component: slides.ValuePropsSlide },
        { path: '/array-props', component: slides.ArrayPropsSlide },
        { path: '/object-props', component: slides.ObjectPropsSlide },
        { path: '/function-props', component: slides.ReactDelegatedStatefulComponentSlide },
        { path: '/fixed-layout', component: slides.FixedLayoutSlide },
        { path: '/composed-layout', component: slides.ComposedLayoutSlide },
        { path: '/composed-functions-layout', component: slides.ComposedFunctionsLayoutSlide },
        { path: '/fixed-test-pattern', component: slides.FixedTestPatternSlide },
        { path: '/dynamic-test-pattern', component: slides.DynamicTestPatternSlide },
        { path: '/hoc', component: slides.HocTitleSlide },
        { path: '/simple-hoc', component: slides.SimpleHocSlide },
        { path: '/wrapped-with-hoc', component: slides.WrappedWithHocSlide },
        { path: '/test-pattern-hoc', component: slides.TestPatternHocSlide },
        { path: '/test-pattern-hoc-usage', component: slides.TestPatternHocUsageSlide },
        { path: '/react-hoc-docs', component: slides.ReactHocDocsSlide },
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
