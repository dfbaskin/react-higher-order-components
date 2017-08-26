import React from "react";

import {
    ExampleAlpha,
    ExampleBeta,
    ExampleGamma,
    ExampleDelta,
    ExampleEpsilon,
    ExampleZeta,
} from './example-components';

export const FixedLayout = (props) => {
    return (
        <div className="layout">
            <div>
                <ExampleAlpha message="Left #1" />
                <ExampleBeta message="Left #2" />
                <ExampleGamma message="Left #3" />
            </div>
            <div>
                <ExampleDelta message="Middle #1" />
                <ExampleEpsilon message="Middle #2" />
            </div>
            <div>
                <ExampleZeta message="Right #1" />
            </div>
        </div>
    );
};
