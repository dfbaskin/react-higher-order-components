import React from "react";

import {ComposedLayout} from './composed-layout';
import {
    ExampleAlpha,
    ExampleBeta,
    ExampleGamma,
    ExampleDelta,
    ExampleEpsilon,
    ExampleZeta,
} from './example-components';

export const ComposedLayoutParent = (props) => {
    return (
        <ComposedLayout
            LeftOne={ExampleAlpha}
            LeftTwo={ExampleBeta}
            LeftThree={ExampleGamma}
            MiddleOne={ExampleDelta}
            MiddleTwo={ExampleEpsilon}
            RightOne={ExampleZeta}
        />
    );
};
