import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
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
`;

const sourceCodeTwo = `
export class DynamicTestPattern extends PureComponent {

    state = {
        color: colors[0],
        width: 50,
        height: 60
    };

    randomizePattern = () => {
        this.setState(() => ({
            color: colors[Math.floor(Math.random() * colors.length)],
            width: Math.floor(Math.random() * 50) + 25,
            height: Math.floor(Math.random() * 50) + 25,
        }));
    };

    render() {
        const {color, width, height} = this.state;
        const {children} = this.props;
        return (
            <div onClick={this.randomizePattern}>
                {children({color, width, height})}
            </div>
        )
    }
}
`;

export class DynamicTestPatternSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <TwoPanel>
                    <CodeView sourceCode={sourceCodeOne} language="javascript" />
                    <CodeView sourceCode={sourceCodeTwo} language="javascript" />
                </TwoPanel>
            </FillView>
        )
    }
}
