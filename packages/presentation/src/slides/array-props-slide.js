import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {TwoPanel} from "../shared/two-panel";
import {CodeView} from "../shared/code-view";

const sourceCodeOne = `
export class ArrayPropsParent extends PureComponent {

    state = {
        items: [
            "One",
            "Two",
            "Three",
            "Four"
        ]
    };

    render() {
        const {items} = this.state;
        return (
            <ArrayProps
                items={items}
            />
        )
    }
}
`;

const sourceCodeTwo = `
export const ArrayProps = (props) => {
    const {items} = props;
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={\`li-\${idx}\`}>
                    {item}
                </li>
            ))}
        </ul>
    )
};
`;

export class ArrayPropsSlide extends PureComponent {
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
