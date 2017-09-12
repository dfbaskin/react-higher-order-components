
import React from "react";
import "./two-panel.css";

export const TwoPanel = (props) => {
    const {panelOne: One, panelTwo: Two} = props;
    return (
        <div className="two-panel">
            <One />
            <Two />
        </div>
    )
};
