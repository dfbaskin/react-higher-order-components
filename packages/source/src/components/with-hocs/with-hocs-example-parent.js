import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18next/i18next-config';
import {LanguagePicker} from '../i18next/language-picker';
import {WithHocsExample} from './with-hocs-example';

export const WithHocsExampleParent = (props) => {
    return (
        <I18nextProvider i18n={i18n}>
            <div>
                <LanguagePicker/>
                <WithHocsExample/>
            </div>
        </I18nextProvider>
    );
};
