import React from "react";

import {ComposedLayout} from './composed-layout';
import {TestPattern} from "./test-pattern";

export const TestPatternLayout = (props) => {
    const patternProps = {
        width: "100%",
        height: "100%",
    };
    return (
        <ComposedLayout
            LeftOne={() => <TestPattern color="blue" {...patternProps} />}
            LeftTwo={() => <TestPattern color="lightblue" {...patternProps} />}
            LeftThree={() => <TestPattern color="cyan" {...patternProps} />}
            MiddleOne={() => <TestPattern color="teal" {...patternProps} />}
            MiddleTwo={() => <TestPattern color="green" {...patternProps} />}
            RightOne={() => <TestPattern color="lightgreen" {...patternProps} />}
        />
    );
};
