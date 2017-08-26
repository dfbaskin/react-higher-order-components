import React from "react";
import PropTypes from "prop-types";

export const SimpleStateless = (props) => {
    const {message, onClick} = props;
    return (
        <div onClick={onClick}>
            {message}
        </div>
    )
};

SimpleStateless.propTypes = {
    onClick: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};
