import React, {PureComponent} from "react";

export class HOCDefinitionSlide extends PureComponent {
    render() {
        return (
            <div>
                <blockquote>
                    A higher-order component (HOC) is an advanced technique in React for
                    reusing component logic. HOCs are not part of the React API, per se.
                    They are a pattern that emerges from React's compositional nature.
                </blockquote>
                <cite>
                    <a href="https://facebook.github.io/react/docs/higher-order-components.html">
                        https://facebook.github.io/react/docs/higher-order-components.html
                    </a>
                </cite>
            </div>
        )
    }
}
