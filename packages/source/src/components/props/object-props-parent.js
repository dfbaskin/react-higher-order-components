import React, {PureComponent} from "react";
import {ObjectProps} from "./object-props"

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
