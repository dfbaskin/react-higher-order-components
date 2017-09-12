import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
export const ComposedFunctionsLayoutParent = (props) => {
    return (
        <ComposedLayout
            LeftOne={({message}) => <div><h1>{message}</h1></div>}
            LeftTwo={({message}) => <div><h2>{message}</h2></div>}
            LeftThree={({message}) => <div><h3>{message}</h3></div>}
            MiddleOne={({message}) => <div><h4>{message}</h4></div>}
            MiddleTwo={({message}) => <div><h5>{message}</h5></div>}
            RightOne={({message}) => <div><h6>{message}</h6></div>}
        />
    );
};
`;

const sourceCodeTwo = `
export const ComposedLayout = (props) => {
    const {
        LeftOne,
        LeftTwo,
        LeftThree,
        MiddleOne,
        MiddleTwo,
        RightOne
    } = props;
    return (
        // ...
    );
};
`;

export class ComposedFunctionsLayoutSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <TwoPanel>
                    <CodeView sourceCode={sourceCodeOne} language="javascript" />
                    <CodeView sourceCode={sourceCodeTwo} language="javascript" />
                </TwoPanel>
            </FillView>
        )
    }
}
