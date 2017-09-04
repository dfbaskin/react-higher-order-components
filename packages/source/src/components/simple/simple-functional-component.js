import React from "react";

export function SimpleFunctionalComponent(props) {
    const {currentTemp} = props;
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
