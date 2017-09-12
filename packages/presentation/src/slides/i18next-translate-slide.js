import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export const HelloComponent = (props) => {
    const {t, dateValue, amountValue} = props;
    return (
        <div>
            <div>{t('hello')}</div>
            <div>{t('dateValue', { dateValue })}</div>
            <div>{t('amountValue', { amountValue })}</div>
        </div>
    );
};

export const Hello = translate('ui')(HelloComponent);

<Hello dateValue={dateValue} amountValue={amountValue} />
`;

export class I18NTranslateSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}
