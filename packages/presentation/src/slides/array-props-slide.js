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
