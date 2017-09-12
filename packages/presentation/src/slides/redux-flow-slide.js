import React, {PureComponent} from "react";
import reduxFlowImage from "../media/redux-flow.svg";
import {FillView} from "../shared/fill-view";

export class ReduxFlowSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <img src={reduxFlowImage} width="1000" alt="Redux flow" />
            </FillView>
        )
    }
}
