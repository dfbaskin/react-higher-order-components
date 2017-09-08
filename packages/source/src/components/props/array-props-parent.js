import React, {PureComponent} from "react";
import {ArrayProps} from "./array-props"

export class ArrayPropsParent extends PureComponent {

    state = {
        items: [
            "One",
            "Two",
            "Three",
            "Four"
        ]
    };

    render() {
        const {items} = this.state;
        return (
            <ArrayProps
                items={items}
            />
        )
    }
}
