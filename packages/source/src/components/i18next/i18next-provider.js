import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next-config';
import {LanguagePicker} from './language-picker';
import {Hello} from './hello';

const dateValue = new Date();
const amountValue = 12345.67;

export const InternationalizationProvider = (props) => {
    return (
        <I18nextProvider i18n={i18n}>
            <div>
                <LanguagePicker />
                <Hello dateValue={dateValue} amountValue={amountValue} />
            </div>
        </I18nextProvider>
    );
};
