import React, {PureComponent} from "react";
import reactRenderImage from "../media/react-render.svg";
import {FillView} from "../shared/fill-view";

export class ReactRenderSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <img src={reactRenderImage} width="1000" alt="React render" />
            </FillView>
        )
    }
}
