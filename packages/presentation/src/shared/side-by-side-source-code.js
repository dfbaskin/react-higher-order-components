import React, {PureComponent} from "react";
import {SourceCode} from "./source-code";
import "./side-by-side-source-code.css";

export class SideBySideSourceCode extends PureComponent {
    render() {
        const {
            sourceCodeOne,
            scaleOne = 0.95,
            sourceCodeTwo,
            scaleTwo = 0.95,
        } = this.props;
        return (
            <div className="side-by-side">
                <SourceCode sourceCode={sourceCodeOne} scale={scaleOne} />
                <SourceCode sourceCode={sourceCodeTwo} scale={scaleTwo} />
            </div>
        )
    }
}
