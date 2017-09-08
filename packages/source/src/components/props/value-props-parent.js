import React, {PureComponent} from "react";
import {ValueProps} from "./value-props"

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
