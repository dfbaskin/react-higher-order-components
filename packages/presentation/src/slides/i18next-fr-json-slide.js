import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
{
  "hello": "Bonjour!",
  "dateValue": "Rendez-vous amoureux: {{dateValue, default}}",
  "amountValue": "Montant: {{amountValue, default}}"
}
`;

export class I18NFrJsonSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
