import React from 'react';
import { ClientValidateMessages } from '../error/client.validate.messages.component';
import { ServerValidateMessages } from '../error/server.validate.messages.component';

export const InputText = props => {
    return (
        <div>
            <input type="text"
                id={props.id}
                name={props.name}
                className={props.className}
                onChange={() => props.setDisable(false)}
                ref={props.validate} />
            <ClientValidateMessages name={props.name} errors={props.errors} />
            <ServerValidateMessages name={props.name} />
        </div>
    )
}