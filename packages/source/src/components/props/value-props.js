import React from "react";

export const ValueProps = (props) => {
    const {message, currentTemp} = props;
    return (
        <div>
            <p>{message}</p>
            <p>Current Temperature is {currentTemp}&#176; F</p>
        </div>
    )
};
