import React, {PureComponent} from "react";
import {SimpleStateless} from "./simple-stateless"

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
            <SimpleStateless onClick={this.onClick} message={message} />
        )
    }
}
