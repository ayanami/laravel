import React, { useState } from 'react';

export const DoubleClickProtectAnchor = ChildComponent => {
    return (props) => {

        const [disabled, setDisabled] = useState(false);

        const handler = () => {
            setDisabled(true);
            console.log("hoge");
            props.listener?.();
        }
        return (
            <a href={props.href}
                onClick={handler.bind(this)}
                style={disabled ? { pointerEvents: "none" } : null}>
                <ChildComponent />
            </a>
        );
    }
}