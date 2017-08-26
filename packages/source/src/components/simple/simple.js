import React, {PureComponent} from "react";

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
