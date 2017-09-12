import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const FixedLayout = (props) => {
    return (
        <div className="layout">
            <div>
                <ExampleAlpha message="Left #1" />
                <ExampleBeta message="Left #2" />
                <ExampleGamma message="Left #3" />
            </div>
            <div>
                <ExampleDelta message="Middle #1" />
                <ExampleEpsilon message="Middle #2" />
            </div>
            <div>
                <ExampleZeta message="Right #1" />
            </div>
        </div>
    );
};
`;

export class FixedLayoutSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
