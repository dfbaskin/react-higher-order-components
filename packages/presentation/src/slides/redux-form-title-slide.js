import React, {PureComponent} from "react";
import reduxFormImage from "../media/redux-form.png";
import {FillView} from "../shared/fill-view";

export class ReduxFormTitleSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <img src={reduxFormImage} width="1000" alt="React render" />
            </FillView>
        )
    }
}
