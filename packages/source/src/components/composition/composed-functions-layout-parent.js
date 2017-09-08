import React from "react";

import {ComposedLayout} from './composed-layout';

export const ComposedFunctionsLayoutParent = (props) => {
    return (
        <ComposedLayout
            LeftOne={({message}) => <div><h1>{message}</h1></div>}
            LeftTwo={({message}) => <div><h2>{message}</h2></div>}
            LeftThree={({message}) => <div><h3>{message}</h3></div>}
            MiddleOne={({message}) => <div><h4>{message}</h4></div>}
            MiddleTwo={({message}) => <div><h5>{message}</h5></div>}
            RightOne={({message}) => <div><h6>{message}</h6></div>}
        />
    );
};
