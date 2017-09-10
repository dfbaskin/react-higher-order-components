
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {currentPantryAccountSelector} from "./pantry-actions";
import {amountFormat} from "./utilities";

export const PantryAccountComponent = (props) => {
    const {account} = props;
    return (
        <div className="pantry-account">
            <h1>Account</h1>
            <table>
                <thead>
                    <tr>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {account.map((item, idx) => {
                        const {credit, debit, balance} = item;
                        return (
                            <tr key={`item-${idx}`}>
                                <td>{amountFormat.format(debit)}</td>
                                <td>{amountFormat.format(credit)}</td>
                                <td>{amountFormat.format(balance)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export const PantryAccount = compose(
    connect(currentPantryAccountSelector)
)(PantryAccountComponent);
