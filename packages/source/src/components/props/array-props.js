import React from "react";

export const ArrayProps = (props) => {
    const {items} = props;
    return (
        <ul>
            {items.map((item, idx) => (
                <li key={`li-${idx}`}>{item}</li>
            ))}
        </ul>
    )
};
