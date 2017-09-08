import React from "react";

export const ObjectProps = (props) => {
    const {message, currentTemp} = props.item;
    return (
        <div>
            <p>{message}</p>
            <p>Current Temperature is {currentTemp}&#176; F</p>
        </div>
    )
};
