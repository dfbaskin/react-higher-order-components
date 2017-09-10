
import React, {PureComponent} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {clearGroceryList, currentGroceryListSelector, debitAccount, updatePantry} from "./pantry-actions";
import {amountFormat} from "./utilities";

export class GroceryListComponent extends PureComponent {

    clearGroceryList = () => {
        const {clearGroceryList} = this.props;
        clearGroceryList();
    };

    buyGroceries = () => {
        const {
            groceryList,
            totalPrice,
            updatePantry,
            clearGroceryList,
            debitAccount
        } = this.props;
        updatePantry(groceryList);
        debitAccount(totalPrice);
        clearGroceryList();
    };

    render() {
        const {
            clearGroceryList,
            buyGroceries
        } = this;
        const {
            groceryList,
            totalPrice,
            totalQuantity
        } = this.props;
        return (
            <div className="grocery-list">
                <h1>Grocery List</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Total Price</th>
                        <th>Unit Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {groceryList.map((item, idx) => {
                        const {name, price, quantity, unitPrice} = item;
                        return (
                            <tr key={`item-${idx}`}>
                                <td>{name}</td>
                                <td>{amountFormat.format(price)}</td>
                                <td>{quantity} @ {amountFormat.format(unitPrice)}/item</td>
                            </tr>
                        )
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>
                            <em>Total:</em>
                        </td>
                        <td>
                            {amountFormat.format(totalPrice)}
                        </td>
                        <td>
                            {totalQuantity} items
                        </td>
                    </tr>
                    </tfoot>
                </table>
                <div>
                    <button onClick={buyGroceries}>Buy</button>
                    <button onClick={clearGroceryList}>Clear</button>
                </div>
            </div>
        )
    }
}

export const GroceryList = compose(
    connect(
        currentGroceryListSelector,
        {clearGroceryList, updatePantry, debitAccount}
    )
)(GroceryListComponent);
