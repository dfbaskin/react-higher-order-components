
import React, {PureComponent} from "react";
import "./fill-view.css";

export class FillView extends PureComponent {

    divRef = null;

    state = {
        scale: 1.0
    };

    setDivRef = (ref) => {
        this.divRef = ref;
    };

    componentDidMount() {
        const {width: contentWidth, height: contentHeight} = this.divRef.getBoundingClientRect();
        const {width: parentWidth, height: parentHeight} = this.divRef.parentNode.parentNode.getBoundingClientRect();
        const availableWidth = parentWidth * 0.95;
        const availableHeight = parentHeight * 0.95;
        const scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight);
        this.setState(() => ({ scale }));
    }

    render() {
        const {children} = this.props;
        const {scale} = this.state;
        const contentProps = {
            ref: this.setDivRef,
            style: {
                transform: `scale(${scale})`,
            }
        };
        return (
            <div className="fill-view">
                <div {...contentProps}>
                    {children}
                </div>
            </div>
        )
    }
}
