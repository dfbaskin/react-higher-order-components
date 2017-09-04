import React, {PureComponent} from "react";

export class SourceCode extends PureComponent {
    render() {
        const {sourceCode, scale = 2.0} = this.props;
        const divProps = {
            style: {
                transform: `scale(${scale}, ${scale})`,
                padding: "1rem",
                backgroundColor: "#fff",
                border: "1px solid #ddd"
            }
        };
        const html = {
            __html: sourceCode
        };
        return (
            <div {...divProps}>
                <div dangerouslySetInnerHTML={html} />
            </div>
        )
    }
}
