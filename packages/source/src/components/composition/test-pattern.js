import React from "react";

export const TestPattern = (props) => {
    let {color, width, height} = props;
    let svgStyles = {
        width,
        height
    };
    return (
        <svg style={svgStyles} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
                d="M 50,50 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                stroke={color}
                strokeWidth="1px"
                fill="none"
            />
            <path
                d="M 0,0 l 100,100"
                stroke={color}
                strokeWidth="1px"
                fill="none"
            />
            <path
                d="M 100,0 l -100,100"
                stroke={color}
                strokeWidth="1px"
                fill="none"
            />
            <path
                d="M 0,0 l 0,100 l 100,0 l 0,-100 l -100,0"
                stroke={color}
                strokeWidth="1px"
                fill="none"
            />
        </svg>
    )
};
