import React, {PureComponent} from "react";

import twitterImage from '../media/twitter.svg';
import emailImage from '../media/email.svg';

export class PresentationSlide extends PureComponent {
    render() {
        return (
            <div className="box-center">
                <div>
                    <h1>Thanks!!</h1>
                    <p>
                        <a href="https://github.com/dfbaskin/react-higher-order-components">
                            https://github.com/dfbaskin/react-higher-order-components
                        </a>
                    </p>
                    <h4>
                        Dave Baskin<br />
                        <img src={twitterImage} width="50vw" height="40vh" alt="twitter" /> @dfbaskin<br/>
                        <img src={emailImage} width="50vw" height="40vh" alt="email" /> dbaskin@wintellect.com
                    </h4>
                </div>
            </div>
        )
    }
}
