import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
{
  "hello": "Hello there!",
  "dateValue": "Date: {{dateValue, default}}",
  "amountValue": "Value: {{amountValue, default}}"
}
`;

export class I18NEnJsonSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
