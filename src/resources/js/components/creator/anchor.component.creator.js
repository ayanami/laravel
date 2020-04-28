import React, { useState } from 'react';

export const createAnchor = ChildComponent => {
    return (props) => {

        const [disabled, setDisabled] = useState(false);

        const handler = () => {
            setDisabled(true);
            props.listener?.();
        }
        return (
            <a href={props.href}
                className={props?.className}
                onClick={handler.bind(this)}
                style={disabled ? { pointerEvents: "none" } : null}>
                <ChildComponent />
            </a>
        );
    }
}