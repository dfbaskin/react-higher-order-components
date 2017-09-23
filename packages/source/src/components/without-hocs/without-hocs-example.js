import React from "react";
import {Mouse} from "./mouse";
import {TranslateAsRenderProp, ConnectAsRenderProp} from "./render-prop-wrappers";
import {LanguagePicker} from '../i18next/language-picker';
import {mouseMessageSelector} from "../pantry/pantry-actions";

export const WithoutHocsExample = (props) => {
    return (
        <div>
            <LanguagePicker/>
            <div style={{ height: '80vh' }}>
                <TranslateAsRenderProp render={(t) => (
                    <ConnectAsRenderProp render={(state, dispatch) => {
                        const {message} = mouseMessageSelector(state);
                        return (
                            <Mouse render={({ x, y }) => (
                                <div>
                                    <h1>{t('mousePos', {x, y})}</h1>
                                    <p>{message}</p>
                                </div>
                            )}/>
                        );
                    }}/>
                )}/>
            </div>
        </div>
    )
};
