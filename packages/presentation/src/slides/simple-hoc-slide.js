import React, {PureComponent} from "react";
import {SourceCode} from "../shared/source-code";

const sourceCode = `
<div style="color: #000000;background-color: #ffffff;font-family: Consolas, 'Courier New', monospace;font-weight: normal;font-size: 14px;line-height: 19px;white-space: pre;"><div><span style="color: #af00db;">export</span><span style="color: #000000;"> </span><span style="color: #0000ff;">const</span><span style="color: #000000;"> </span><span style="color: #795e26;">simpleHoc</span><span style="color: #000000;"> </span><span style="color: #000000;">=</span><span style="color: #000000;"> () </span><span style="color: #0000ff;">=&gt;</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">    </span><span style="color: #af00db;">return</span><span style="color: #000000;"> (</span><span style="color: #001080;">WrappedComponent</span><span style="color: #000000;">) </span><span style="color: #0000ff;">=&gt;</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">        </span><span style="color: #af00db;">return</span><span style="color: #000000;"> (</span><span style="color: #001080;">props</span><span style="color: #000000;">) </span><span style="color: #0000ff;">=&gt;</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">            </span><span style="color: #0000ff;">const</span><span style="color: #000000;"> </span><span style="color: #001080;">componentProps</span><span style="color: #000000;"> </span><span style="color: #000000;">=</span><span style="color: #000000;"> {</span></div><div><span style="color: #000000;">                </span><span style="color: #001080;">message:</span><span style="color: #000000;"> </span><span style="color: #a31515;">"Wrapped Component"</span><span style="color: #000000;">,</span></div><div><span style="color: #000000;">                </span><span style="color: #000000;">...</span><span style="color: #001080;">props</span></div><div><span style="color: #000000;">            };</span></div><div><span style="color: #000000;">            </span><span style="color: #af00db;">return</span><span style="color: #000000;"> (</span></div><div><span style="color: #000000;">                </span><span style="color: #800000;">&lt;</span><span style="color: #267f99;">WrappedComponent</span><span style="color: #000000;"> {</span><span style="color: #000000;">...</span><span style="color: #001080;">componentProps</span><span style="color: #000000;">} </span><span style="color: #800000;">/&gt;</span></div><div><span style="color: #000000;">            );</span></div><div><span style="color: #000000;">        };</span></div><div><span style="color: #000000;">    };</span></div><div><span style="color: #000000;">};</span></div><br></div>
`;

export class SimpleHocSlide extends PureComponent {
    render() {
        return (
            <div>
                <SourceCode sourceCode={sourceCode} scale={2.0} />
            </div>
        )
    }
}
