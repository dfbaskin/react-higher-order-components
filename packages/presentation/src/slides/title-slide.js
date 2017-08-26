import React, {PureComponent} from "react";

export class TitleSlide extends PureComponent {
    render() {
        return (
            <div className="box-center">
                <div>
                    <h1>
                        React<br />
                        Higher Order<br />
                        Components
                    </h1>
                    <h5>
                        Dave Baskin<br/>
                        Atlanta Code Camp
                    </h5>
                </div>
            </div>
        )
    }
}
