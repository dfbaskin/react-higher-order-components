import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export class Simple extends PureComponent {

    state = {
        message: "Hello!"
    };

    onClick = () => {
        this.setState(({message}) => ({
            message: message + " [Clicked]"
        }));
    };

    render() {
        const {message} = this.state;
        return (
            <div onClick={this.onClick}>
                {message}
            </div>
        )
    }
}
`;

export class ReactStatefulComponentSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
