import React from 'react';

import globalStyles from './common/globalStyles';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ?
            (
                <div className="messagecontainer justifyEnd">
                    <p className="senttext">{trimmedName}</p>
                    <div className="messagebox">
                        <p className="messagetext">{text}</p>
                    </div>
                </div>
            )
            :
            (
                <div className="messagecontainer justifyStart">
                    <div className="messagebox">
                        <p className="messagetext">{text}</p>
                    </div>
                    <p className="senttext">{user}</p>
                </div>
            )
    )
}

export default Message;