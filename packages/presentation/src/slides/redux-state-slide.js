import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
const initialState = {
    groceryItems: [],
    groceryList: {},
    pantry: {},
    account: [
        { credit: 100.0, debit: 0, balance: 100.0 }
    ]
};
`;

export class ReduxStateSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
