import React, {PureComponent} from "react";
import {DynamicTestPattern} from "./dynamic-test-pattern";
import {TestPattern} from "./test-pattern";

export class DynamicTestPatternParent extends PureComponent {
    render() {
        return (
            <DynamicTestPattern>
                {({color, width, height}) => {
                    const testPatternProps = {
                        color,
                        width: width + "vw",
                        height: height + "vh"
                    };
                    return (
                        <TestPattern {...testPatternProps} />
                    )
                }}
            </DynamicTestPattern>
        )
    }
}
