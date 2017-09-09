import React, {PureComponent} from "react";
import reactDocsImage from "../media/react-hoc-docs.png";

export class ReactHocDocsSlide extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <img src={reactDocsImage} width="1000vw" alt="React HOCs" />
                </div>
                <div>
                    <cite>
                        <a href="https://facebook.github.io/react/docs/higher-order-components.html">
                            https://facebook.github.io/react/docs/higher-order-components.html
                        </a>
                    </cite>
                </div>
            </div>
        )
    }
}
