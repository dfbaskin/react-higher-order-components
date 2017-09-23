import React from "react";
import {LanguagePicker} from '../i18next/language-picker';
import {WithoutHocsExample} from "./without-hocs-example";

export const WithoutHocsExampleParent = (props) => {
    return (
        <div>
            <LanguagePicker/>
            <WithoutHocsExample />
        </div>
    )
};
