import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const currentGroceryListSelector = createSelector(
    currentPantryState,
    ({groceryItems, groceryList}) => {
        groceryList = Object
            .entries(groceryList)
            .map(([name, quantity]) => {
                const item = groceryItems.find(item => item.name === name);
                const unitPrice = item ? item.price : 0;
                const price = unitPrice * quantity;
                return { name, quantity, unitPrice, price };
            });
        return {
            groceryList,
            totalPrice: groceryList.reduce((p, i) => p + i.price, 0),
            totalQuantity: groceryList.reduce((q, i) => q + i.quantity, 0)
        };
    }
);
`;

export class ReduxSelectorsSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
