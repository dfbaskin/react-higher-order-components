
import React from "react";
import {PrismCode} from "react-prism";

export const CodeView = (props) => {
    const {sourceCode, language} = props;
    const codeProps = {
        component: "pre",
        className: `language-${language}`,
    };
    return (
        <PrismCode {...codeProps}>
            {sourceCode.trim()}
        </PrismCode>
    )
};
