import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
export class SimpleStatelessParent extends PureComponent {

    state = {
        message: "Hello stateless!"
    };

    onClick = () => {
        this.setState(({message}) => ({
            message: message + " [Clicked]"
        }));
    };

    render() {
        const {message} = this.state;
        return (
            <SimpleStateless
                onClick={this.onClick}
                message={message}
            />
        )
    }
}
`;

const sourceCodeTwo = `
export const SimpleStateless = (props) => {
    const {message, onClick} = props;
    return (
        <div onClick={onClick}>
            {message}
        </div>
    )
};
`;

export class ReactDelegatedStatefulComponentSlide extends PureComponent {
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
