import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const DynamicRectangles = ({color, width, height}) => {
    const divProps = {
        style: {
            backgroundColor: color,
            width: width + "vw",
            height: height + "vh"
        }
    };
    return (
        <div {...divProps}>
            {width} x {height}
        </div>
    );
};

export const DynamicRectanglesComposed = compose(
    dynamicTestPatternHoc({
        colors: [
            'tomato',
            'darkkhaki',
            'slateblue',
            'mediumseagreen',
            'aqua',
        ]
    })
)(DynamicRectangles);
`;

export class RectanglesHocUsageSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
