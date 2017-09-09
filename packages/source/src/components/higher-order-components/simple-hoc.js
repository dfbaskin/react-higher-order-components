
import React from "react";
import {compose} from "redux";

export const simpleHoc = () => {
    return (WrappedComponent) => {
        return (props) => {
            const componentProps = {
                message: "Wrapped Component",
                ...props
            };
            return (
                <WrappedComponent {...componentProps} />
            );
        };
    };
};

export const MyComponent = (props) => {
    const {message = "Unwrapped Component"} = props;
    return (
        <div>[ {message} ]</div>
    )
};

export const DirectlyWrapped = simpleHoc()(MyComponent);

export const ComposedWrapped = compose(
    simpleHoc()
)(MyComponent);
