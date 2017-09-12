import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const addToGroceryList = (item) => {
    return {
        type: ADD_TO_GROCERY_LIST,
        payload: item
    };
};

export const clearGroceryList = () => {
    return {
        type: CLEAR_GROCERY_LIST
    };
};

export const updatePantry = (items) => {
    return {
        type: UPDATE_PANTRY,
        payload: {
            items
        }
    };
};
`;

export class ReduxActionsSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
