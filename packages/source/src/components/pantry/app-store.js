
import {createStore, combineReducers} from "redux";
import {reducer as pantry} from "./pantry-actions";

const appReducers = combineReducers({
    pantry
});

const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export const appStore = createStore(
    appReducers,
    {},
    reduxDevToolsExtension && reduxDevToolsExtension()
);
