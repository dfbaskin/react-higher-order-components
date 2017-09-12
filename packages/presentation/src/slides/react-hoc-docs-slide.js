import React, {PureComponent} from "react";
import reactDocsImage from "../media/react-hoc-docs.png";
import {FillView} from "../shared/fill-view";

export class ReactHocDocsSlide extends PureComponent {
    render() {
        return (
            <FillView percentMargin={15}>
                <div style={{width: "80vw"}}>
                    <div>
                        <img src={reactDocsImage} alt="React HOCs" style={{width: "100%"}} />
                    </div>
                    <div>
                        <cite>
                            <a href="https://facebook.github.io/react/docs/higher-order-components.html">
                                https://facebook.github.io/react/docs/higher-order-components.html
                            </a>
                        </cite>
                    </div>
                </div>
            </FillView>
        )
    }
}
