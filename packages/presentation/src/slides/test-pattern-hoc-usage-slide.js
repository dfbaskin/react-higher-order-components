import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
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
`;

export class TestPatternHocUsageSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
