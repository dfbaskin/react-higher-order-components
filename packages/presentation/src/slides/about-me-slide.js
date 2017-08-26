import React, {PureComponent} from "react";

import twitterImage from '../media/twitter.svg';
import emailImage from '../media/email.svg';

export class AboutMeSlide extends PureComponent {
    render() {
        return (
            <div>
                <h1>Dave Baskin</h1>
                <h4>
                    Principal Consultant, Wintellect<br/>
                    <img src={twitterImage} width="50vw" height="40vh" alt="twitter" /> @dfbaskin<br/>
                    <img src={emailImage} width="50vw" height="40vh" alt="email" /> dbaskin@wintellect.com
                </h4>
            </div>
        )
    }
}
