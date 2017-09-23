import React, {Component} from "react";

export const withMouse = () => (WrappedComponent) => {
    return class extends Component {

        state = { x: 0, y: 0 };

        handleMouseMove = (event) => {
            this.setState({
                x: event.clientX,
                y: event.clientY
            })
        };

        render() {
            return (
                <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                    <WrappedComponent {...this.props} mouse={this.state}/>
                </div>
            )
        }
    }
};
