import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const PantryInventoryComponent = (props) => {
    const {pantry} = props;
    return (
        <div>
            <h1>Pantry</h1>
            <ul>
                {Object.entries(pantry).map(([name, quantity], idx) => {
                    return (
                        <li key={\`item-\${idx}\`}>
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
`;

export class ReduxMapStateToPropsSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
