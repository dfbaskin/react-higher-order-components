import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const GroceryItemsComponent = (props) => {
    const {groceryItems, addToGroceryList} = props;
    return (
        <div>
            <h1>Grocery Items</h1>
            <ul>
                {groceryItems.map((item, idx) => {
                    const {name, price} = item;
                    return (
                        <li key={\`item-\${idx}\`}>
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
`;

export class ReduxMapDispatchToPropsSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
