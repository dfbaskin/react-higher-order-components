import React, {PureComponent} from "react";
import recomposeImage from "../media/recompose.png";
import {FillView} from "../shared/fill-view";

export class RecomposeTitleSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <img src={recomposeImage} width="1000" alt="React render" />
            </FillView>
        )
    }
}
