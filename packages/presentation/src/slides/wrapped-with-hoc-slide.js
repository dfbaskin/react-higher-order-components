import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const MyComponent = (props) => {
    const {message = "Unwrapped Component"} = props;
    return (
        <div>[ {message} ]</div>
    )
};

export const DirectlyWrapped = simpleHoc()(MyComponent);

export const ComposedWrapped = compose(
    simpleHoc()
)(MyComponent);
`;

export class WrappedWithHocSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
