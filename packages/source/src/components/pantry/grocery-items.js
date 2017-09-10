
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {addToGroceryList, currentGroceryItemsSelector} from "./pantry-actions";
import {amountFormat} from "./utilities";

export const GroceryItemsComponent = (props) => {
    const {groceryItems, addToGroceryList} = props;
    return (
        <div>
            <h1>Grocery Items</h1>
            <ul>
                {groceryItems.map((item, idx) => {
                    const {name, price} = item;
                    return (
                        <li key={`item-${idx}`}>
                            <button onClick={() => addToGroceryList(item)}>+</button>
                            <span>{name} ({amountFormat.format(price)})</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export const GroceryItems = compose(
    connect(currentGroceryItemsSelector, {addToGroceryList})
)(GroceryItemsComponent);
