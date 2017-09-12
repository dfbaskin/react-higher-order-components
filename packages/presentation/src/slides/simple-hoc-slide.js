import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const simpleHoc = () => {
    return (WrappedComponent) => {
        return (props) => {
            const componentProps = {
                message: "Wrapped Component",
                ...props
            };
            return (
                <WrappedComponent {...componentProps} />
            );
        };
    };
};
`;

export class SimpleHocSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
