import React, {PureComponent} from "react";
import {TestPattern} from "./test-pattern";

const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'black'
];

export class DynamicTestPattern extends PureComponent {

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
        const {children} = this.props;
        return (
            <div onClick={this.randomizePattern}>
                {children({color, width, height})}
            </div>
        )
    }
}
