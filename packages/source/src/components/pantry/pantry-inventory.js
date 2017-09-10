
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {currentPantryInventorySelector} from "./pantry-actions";

export const PantryInventoryComponent = (props) => {
    const {pantry} = props;
    return (
        <div>
            <h1>Pantry</h1>
            <ul>
                {Object.entries(pantry).map(([name, quantity], idx) => {
                    return (
                        <li key={`item-${idx}`}>
                            <span>{name} {' '} ({quantity})</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export const PantryInventory = compose(
    connect(currentPantryInventorySelector)
)(PantryInventoryComponent);
