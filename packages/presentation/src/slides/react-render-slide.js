import React, {PureComponent} from "react";
import reactRenderImage from "../media/react-render.svg";

export class ReactRenderSlide extends PureComponent {
    render() {
        return (
            <div>
                <img src={reactRenderImage} width="1200vw" alt="React render" />
            </div>
        )
    }
}
