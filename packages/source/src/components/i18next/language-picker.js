
import React, {PureComponent} from "react";
import "./language-picker.css";
import {changeLanguage, getCurrentLanguage} from "./i18next-config";

const supportedLanguages = [
    { id: 'en', name: 'English' },
    { id: 'fr', name: 'French' },
    { id: 'es', name: 'Spanish' },
];

export class LanguagePicker extends PureComponent {

    state = {
        languageId: ''
    };

    componentDidMount() {
        getCurrentLanguage()
            .then(languageId => {
                this.setState(() => ({
                    languageId
                }));
            });
    }

    changeLanguage(languageId) {
        changeLanguage(languageId);
        this.setState(() => ({
            languageId
        }));
    };

    render() {
        const {languageId} = this.state;
        return (
            <div className="language-picker">
                Language:
                {
                    supportedLanguages.map(lng => {
                        const inputProps = {
                            type: "radio",
                            value: lng.id,
                            name: "selected-language",
                            onChange: () => this.changeLanguage(lng.id),
                            checked: lng.id === languageId
                        };
                        return (
                            <label key={lng.id}>
                                <input {...inputProps} />
                                {lng.name}
                            </label>
                        )
                    })
                }
            </div>
        )
    }
}
