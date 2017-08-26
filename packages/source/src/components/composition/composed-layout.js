import React from "react";
import PropTypes from "prop-types";

export const ComposedLayout = (props) => {
    const {
        LeftOne,
        LeftTwo,
        LeftThree,
        MiddleOne,
        MiddleTwo,
        RightOne
    } = props;
    return (
        <div className="layout">
            <div>
                { LeftOne && <LeftOne message="Left #1" /> }
                { LeftTwo && <LeftTwo message="Left #2" /> }
                { LeftThree && <LeftThree message="Left #3" /> }
            </div>
            <div>
                { MiddleOne && <MiddleOne message="Middle #1" /> }
                { MiddleTwo && <MiddleTwo message="Middle #2" /> }
            </div>
            <div>
                { RightOne && <RightOne message="Left #1" /> }
            </div>
        </div>
    );
};

ComposedLayout.propTypes = {
    LeftOne: PropTypes.func,
    LeftTwo: PropTypes.func,
    LeftThree: PropTypes.func,
    MiddleOne: PropTypes.func,
    MiddleTwo: PropTypes.func,
    RightOne: PropTypes.func,
};
