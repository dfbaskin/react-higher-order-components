import React from "react";
import {dynamicTestPatternHoc} from "./dynamic-test-pattern-hoc";
import {compose} from "redux";

export const DynamicRectangles = ({color, width, height}) => {
    const divProps = {
        style: {
            backgroundColor: color,
            width: width + "vw",
            height: height + "vh"
        }
    };
    return (
        <div {...divProps}>
            <h1>{width} x {height}</h1>
        </div>
    );
};

export const DynamicRectanglesComposed = compose(
    dynamicTestPatternHoc({
        colors: [
            'tomato',
            'darkkhaki',
            'slateblue',
            'mediumseagreen',
            'aqua',
        ]
    })
)(DynamicRectangles);
