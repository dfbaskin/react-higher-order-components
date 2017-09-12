
import React from "react";
import "./two-panel.css";

export const TwoPanel = (props) => {
    const {children} = props;
    return (
        <div className="two-panel">
            {children}
        </div>
    )
};
