
import React from "react";
import {
    MyComponent,
    DirectlyWrapped,
    ComposedWrapped
} from "./simple-hoc";

export const SimpleHocList = (props) => {
    return (
        <div>
            <MyComponent/>
            <DirectlyWrapped/>
            <ComposedWrapped/>
        </div>
    );
};
