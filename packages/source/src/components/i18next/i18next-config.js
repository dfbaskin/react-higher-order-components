
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

let loadPromiseResolve, loadPromiseReject;
const loadPromise = new Promise((resolve, reject) => {
    loadPromiseResolve = resolve;
    loadPromiseReject = reject;
});

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        ns: ['ui'],
        defaultNS: 'ui',
        debug: false,
        interpolation: {
            escapeValue: false,
            format(value, format, lng) {
                if(value instanceof Date) {
                    return new Intl.DateTimeFormat(lng).format(value);
                } else if(typeof value === "number") {
                    return new Intl.NumberFormat(lng).format(value);
                }
                return value;
            }
        },
        react: {
            wait: true,
            nsMode: 'default'
        }
    }, (err) => {
        if(err) {
            console.error(err);
            loadPromiseReject(err);
        } else {
            loadPromiseResolve();
        }
    });

export const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode, (err, t) => {
        if (err) {
            console.error(err);
        }
    });
};

export const getCurrentLanguage = () => loadPromise.then(() => i18n.language);

export default i18n;
