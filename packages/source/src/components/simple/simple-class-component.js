import React, {Component} from "react";

export class SimpleClassComponent extends Component {
    render() {
        const {currentTemp} = this.props;
        return (
            <article>
                <header>
                    <h1>Welcome to React</h1>
                </header>
                <section>
                    <p>More about React and Higher-Order Components ...</p>
                    <p>Current temperature is {currentTemp}</p>
                </section>
            </article>
        )
    }
}
