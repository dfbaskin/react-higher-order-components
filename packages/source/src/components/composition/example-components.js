import React from "react";

function makeExampleComponent(id) {
    return (props) => {
        const { message } = props;
        const text = message ? `[${id}] - ${message}` : `${id}`;
        return (
            <div className="example-component">
                {text}
            </div>
        );
    };
}

export const ExampleAlpha = makeExampleComponent('Alpha');
export const ExampleBeta = makeExampleComponent('Beta');
export const ExampleGamma = makeExampleComponent('Gamma');
export const ExampleDelta = makeExampleComponent('Delta');
export const ExampleEpsilon = makeExampleComponent('Epsilon');
export const ExampleZeta = makeExampleComponent('Zeta');
