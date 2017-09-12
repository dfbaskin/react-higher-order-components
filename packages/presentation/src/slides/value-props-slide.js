import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
export class ValuePropsParent extends PureComponent {

    state = {
        message: "Welcome!",
        currentTemp: 74,
    };

    render() {
        const {message, currentTemp} = this.state;
        return (
            <ValueProps
                message={message}
                currentTemp={currentTemp}
            />
        )
    }
}
`;

const sourceCodeTwo = `
export const ValueProps = (props) => {
    const {message, currentTemp} = props;
    return (
        <div>
            <p>{message}</p>
            <p>
                Current Temperature is
                {currentTemp}&#176; F
            </p>
        </div>
    )
};
`;

export class ValuePropsSlide extends PureComponent {
    render() {
        const panelProps = {
            panelOne: () => <CodeView sourceCode={sourceCodeOne} language="javascript" />,
            panelTwo: () => <CodeView sourceCode={sourceCodeTwo} language="javascript" />,
        };
        return (
            <FillView>
                <TwoPanel {...panelProps} />
            </FillView>
        )
    }
}
