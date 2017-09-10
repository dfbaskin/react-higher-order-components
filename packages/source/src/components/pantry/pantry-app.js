
import React, {PureComponent} from "react";
import {GroceryItems} from "./grocery-items";
import {GroceryList} from "./grocery-list";
import {PantryInventory} from "./pantry-inventory";
import {PantryAccount} from "./pantry-account";
import {compose} from "redux";
import {connect} from "react-redux";
import {initGroceryList} from "./pantry-actions";

import "./pantry-app.css";

export class PantryAppComponent extends PureComponent {

    componentDidMount() {
        this.props.initGroceryList();
    }

    render() {
        return (
            <div className="pantry-app">
                <div>
                    <GroceryItems/>
                    <GroceryList/>
                </div>
                <div>
                    <PantryInventory/>
                    <PantryAccount/>
                </div>
            </div>
        )
    }
}

export const PantryApp = compose(
    connect(null, {initGroceryList})
)(PantryAppComponent);
