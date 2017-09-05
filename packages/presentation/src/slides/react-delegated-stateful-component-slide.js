import React, {PureComponent} from "react";
import {SourceCode} from "../shared/source-code";
import "./react-delegated-stateful-component-slide.css";

const sourceCodeOne = `
<div style="color: #000000;background-color: #ffffff;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: #af00db;">import</span><span style="color: #000000;"> </span><span style="color: #001080;">React</span><span style="color: #000000;">, {</span><span style="color: #001080;">PureComponent</span><span style="color: #000000;">} </span><span style="color: #af00db;">from</span><span style="color: #000000;"> </span><span style="color: #a31515;">"react"</span><span style="color: #000000;">;</span></div><div><span style="color: #af00db;">import</span><span style="color: #000000;"> {</span><span style="color: #001080;">SimpleStateless</span><span style="color: #000000;">} </span><span style="color: #af00db;">from</span><span style="color: #000000;"> </span><span style="color: #a31515;">"./simple-stateless"</span></div><br><div><span style="color: #af00db;">export</span><span style="color: #000000;"> </span><span style="color: #0000ff;">class</span><span style="color: #000000;"> </span><span style="color: #267f99;">SimpleStatelessParent</span><span style="color: #000000;"> </span><span style="color: #0000ff;">extends</span><span style="color: #000000;"> </span><span style="color: #267f99;">PureComponent</span><span style="color: #000000;"> {</span></div><br><div><span style="color: #000000;">    </span><span style="color: #001080;">state</span><span style="color: #000000;"> </span><span style="color: #000000;">=</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">        </span><span style="color: #001080;">message:</span><span style="color: #000000;"> </span><span style="color: #a31515;">"Hello stateless!"</span></div><div><span style="color: #000000;">    };</span></div><br><div><span style="color: #000000;">    </span><span style="color: #795e26;">onClick</span><span style="color: #000000;"> </span><span style="color: #000000;">=</span><span style="color: #000000;"> () </span><span style="color: #0000ff;">=&gt;</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">        </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.</span><span style="color: #795e26;">setState</span><span style="color: #000000;">(({</span><span style="color: #001080;">message</span><span style="color: #000000;">}) </span><span style="color: #0000ff;">=&gt;</span><span style="color: #000000;"> ({</span></div><div><span style="color: #000000;">            </span><span style="color: #001080;">message:</span><span style="color: #000000;"> </span><span style="color: #001080;">message</span><span style="color: #000000;"> </span><span style="color: #000000;">+</span><span style="color: #000000;"> </span><span style="color: #a31515;">" [Clicked]"</span></div><div><span style="color: #000000;">        }));</span></div><div><span style="color: #000000;">    };</span></div><br><div><span style="color: #000000;">    </span><span style="color: #795e26;">render</span><span style="color: #000000;">() {</span></div><div><span style="color: #000000;">        </span><span style="color: #0000ff;">const</span><span style="color: #000000;"> {</span><span style="color: #001080;">message</span><span style="color: #000000;">} </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #0000ff;">this</span><span style="color: #000000;">.</span><span style="color: #001080;">state</span><span style="color: #000000;">;</span></div><div><span style="color: #000000;">        </span><span style="color: #af00db;">return</span><span style="color: #000000;"> (</span></div><div><span style="color: #000000;">            </span><span style="color: #800000;">&lt;</span><span style="color: #267f99;">SimpleStateless</span><span style="color: #000000;"> </span><span style="color: #ff0000;">onClick</span><span style="color: #000000;">=</span><span style="color: #000000;">{</span><span style="color: #0000ff;">this</span><span style="color: #000000;">.</span><span style="color: #001080;">onClick</span><span style="color: #000000;">} </span><span style="color: #ff0000;">message</span><span style="color: #000000;">=</span><span style="color: #000000;">{</span><span style="color: #001080;">message</span><span style="color: #000000;">} </span><span style="color: #800000;">/&gt;</span></div><div><span style="color: #000000;">        )</span></div><div><span style="color: #000000;">    }</span></div><div><span style="color: #000000;">}</span></div><br></div>
`;
const sourceCodeTwo = `
<div style="color: #000000;background-color: #ffffff;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: #af00db;">import</span><span style="color: #000000;"> </span><span style="color: #001080;">React</span><span style="color: #000000;"> </span><span style="color: #af00db;">from</span><span style="color: #000000;"> </span><span style="color: #a31515;">"react"</span><span style="color: #000000;">;</span></div><div><span style="color: #af00db;">import</span><span style="color: #000000;"> </span><span style="color: #001080;">PropTypes</span><span style="color: #000000;"> </span><span style="color: #af00db;">from</span><span style="color: #000000;"> </span><span style="color: #a31515;">"prop-types"</span><span style="color: #000000;">;</span></div><br><div><span style="color: #af00db;">export</span><span style="color: #000000;"> </span><span style="color: #0000ff;">const</span><span style="color: #000000;"> </span><span style="color: #795e26;">SimpleStateless</span><span style="color: #000000;"> </span><span style="color: #000000;">=</span><span style="color: #000000;"> (</span><span style="color: #001080;">props</span><span style="color: #000000;">) </span><span style="color: #0000ff;">=&gt;</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">    </span><span style="color: #0000ff;">const</span><span style="color: #000000;"> {</span><span style="color: #001080;">message</span><span style="color: #000000;">, </span><span style="color: #001080;">onClick</span><span style="color: #000000;">} </span><span style="color: #000000;">=</span><span style="color: #000000;"> </span><span style="color: #001080;">props</span><span style="color: #000000;">;</span></div><div><span style="color: #000000;">    </span><span style="color: #af00db;">return</span><span style="color: #000000;"> (</span></div><div><span style="color: #000000;">        </span><span style="color: #800000;">&lt;div</span><span style="color: #000000;"> </span><span style="color: #ff0000;">onClick</span><span style="color: #000000;">=</span><span style="color: #000000;">{</span><span style="color: #001080;">onClick</span><span style="color: #000000;">}</span><span style="color: #800000;">&gt;</span></div><div><span style="color: #000000;">            {</span><span style="color: #001080;">message</span><span style="color: #000000;">}</span></div><div><span style="color: #000000;">        </span><span style="color: #800000;">&lt;/div&gt;</span></div><div><span style="color: #000000;">    )</span></div><div><span style="color: #000000;">};</span></div><br></div>
`;

export class ReactDelegatedStatefulComponentSlide extends PureComponent {
    render() {
        return (
            <div className="react-delegated-stateful-component-slide">
                <SourceCode sourceCode={sourceCodeOne} scale={1.5} />
                <SourceCode sourceCode={sourceCodeTwo} scale={1.5} />
            </div>
        )
    }
}
