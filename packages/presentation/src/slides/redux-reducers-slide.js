import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ADD_TO_GROCERY_LIST: {
            const {name} = payload;
            return {
                ...state,
                groceryList: {
                    ...state.groceryList,
                    [name]: (state.groceryList[name] || 0) + 1
                }
            }
        }
        case CLEAR_GROCERY_LIST:
            return {
                ...state,
                groceryList: {}
            };
        // ...
        default:
            return state;
    }
}
`;

export class ReduxReducersSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
