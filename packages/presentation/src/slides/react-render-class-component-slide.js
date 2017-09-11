import React, {PureComponent} from "react";
import {FillView} from "../shared/fill-view";
import {CodeView} from "../shared/code-view";

const sourceCode = `
export class SimpleClassComponent extends Component {
    render() {
        const {currentTemp} = this.props;
        return (
            <article>
                <header>
                    <h1>Welcome to React</h1>
                </header>
                <section>
                    <p>More about React and Higher-Order Components ...</p>
                    <p>Current temperature is {currentTemp}</p>
                </section>
            </article>
        )
    }
}
`;

export class ReactRenderClassComponentSlide extends PureComponent {
    render() {
        return (
            <FillView>
                <CodeView sourceCode={sourceCode} language="javascript" />
            </FillView>
        )
    }
}

