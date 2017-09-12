import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export class GroceryListComponent extends PureComponent {

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
    
    // ...
}

export const GroceryList = compose(
    connect(
        currentGroceryListSelector,
        {clearGroceryList, updatePantry, debitAccount}
    )
)(GroceryListComponent);
`;

export class ReduxMultipleActionsSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
