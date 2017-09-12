import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
export class ObjectPropsParent extends PureComponent {

    state = {
        item: {
            message: "Welcome!",
            currentTemp: 74,
        }
    };

    render() {
        const {item} = this.state;
        return (
            <ObjectProps
                item={item}
            />
        )
    }
}
`;

const sourceCodeTwo = `
export const ObjectProps = (props) => {
    const {message, currentTemp} = props.item;
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

export class ObjectPropsSlide extends PureComponent {
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
