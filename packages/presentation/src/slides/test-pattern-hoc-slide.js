import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const dynamicTestPatternHoc = (options = {}) => {
    const {colors = defaultColors} = options;
    return (WrappedComponent) =>
        class extends PureComponent {

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
                const componentProps = {color, width, height};
                return (
                    <div onClick={this.randomizePattern}>
                        <WrappedComponent {...componentProps} />
                    </div>
                )
            }
        };
};
`;

export class TestPatternHocSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
