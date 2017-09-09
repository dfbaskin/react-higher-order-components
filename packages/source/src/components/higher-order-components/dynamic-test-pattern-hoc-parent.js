import React, {PureComponent} from "react";
import {dynamicTestPatternHoc} from "./dynamic-test-pattern-hoc";
import {TestPattern} from "../composition/test-pattern";
import {compose} from "redux";

export class DynamicTestPatternHocParent extends PureComponent {
    render() {
        const {color, width, height} = this.props;
        const testPatternProps = {
            color,
            width: width + "vw",
            height: height + "vh"
        };
        return (
            <TestPattern {...testPatternProps} />
        )
    }
}

export const DynamicTestPatternComposed = compose(
    dynamicTestPatternHoc({
        colors: [
            'tomato',
            'darkkhaki',
            'slateblue',
            'mediumseagreen',
            'aqua',
        ]
    })
)(DynamicTestPatternHocParent);
