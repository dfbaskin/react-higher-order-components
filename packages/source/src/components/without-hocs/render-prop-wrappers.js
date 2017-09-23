
import i18n from "../i18next/i18next-config";
import {appStore} from "../pantry/app-store";

const t = i18n.t.bind(i18n);

const dispatch = appStore.dispatch.bind(appStore);

export const TranslateAsRenderProp = (props) => {
    const {render} = props;
    return render(t);
};

export const ConnectAsRenderProp = (props) => {
    const state = appStore.getState();
    const {render} = props;
    return render(state, dispatch);
};
