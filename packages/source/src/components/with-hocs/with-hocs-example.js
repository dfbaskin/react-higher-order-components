import React from "react";
import {withMouse} from "./mouse";
import {mouseMessageSelector} from "../pantry/pantry-actions";
import {compose} from "redux";
import {translate} from "react-i18next";
import {connect} from "react-redux";

export const WithHocsExampleComponent = (props) => {
    const {mouse: {x, y}, t, message} = props;
    return (
        <div style={{ height: '80vh' }}>
            <div>
                <h1>{t('mousePos', {x, y})}</h1>
                <p>{message}</p>
            </div>
        </div>
    )
};

export const WithHocsExample = compose(
    translate('ui'),
    connect(mouseMessageSelector),
    withMouse()
)(WithHocsExampleComponent);
