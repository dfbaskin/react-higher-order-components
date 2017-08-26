import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

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

HelloComponent.propTypes = {
    t: PropTypes.func.isRequired,
    dateValue: PropTypes.instanceOf(Date).isRequired,
    amountValue: PropTypes.number.isRequired,
};

export const Hello = translate('ui')(HelloComponent);
