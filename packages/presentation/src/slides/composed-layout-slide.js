import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
export const ComposedLayoutParent = (props) => {
    return (
        <ComposedLayout
            LeftOne={ExampleAlpha}
            LeftTwo={ExampleBeta}
            LeftThree={ExampleGamma}
            MiddleOne={ExampleDelta}
            MiddleTwo={ExampleEpsilon}
            RightOne={ExampleZeta}
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
        <div className="layout">
            <div>
                { LeftOne && <LeftOne message="Left #1" /> }
                { LeftTwo && <LeftTwo message="Left #2" /> }
                { LeftThree && <LeftThree message="Left #3" /> }
            </div>
            <div>
                { MiddleOne && <MiddleOne message="Middle #1" /> }
                { MiddleTwo && <MiddleTwo message="Middle #2" /> }
            </div>
            <div>
                { RightOne && <RightOne message="Left #1" /> }
            </div>
        </div>
    );
};
`;

export class ComposedLayoutSlide extends PureComponent {
    render() {
        const panelProps = {
            panelOne: () => <CodeView sourceCode={sourceCodeOne} language="javascript" />,
            panelTwo: () => <CodeView sourceCode={sourceCodeTwo} language="javascript" />,
        };
        return (
            <FillView>
                <TwoPanel {...panelProps} />
            </FillView>
        )
    }
}
