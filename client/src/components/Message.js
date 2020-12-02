import React from 'react';

import globalStyles from './common/globalStyles';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <div>
            {isSentByCurrentUser ?
            (
                <div className="messagecontainer justifyEnd">
                    <p className="senttext mr-5">{trimmedName}</p>
                    <div className="messagebox">
                        <p className="messagetext currentuser">{text}</p>
                    </div>
                </div>
            )
            :
            (
                <div className="messagecontainer justifyStart">
                    <div className="messagebox">
                        <p className="messagetext">{text}</p>
                    </div>
                    <p className="senttext ml-5">{user}</p>
                </div>
            )}
            <style jsx="true">{`
                .messagecontainer {
                    display: flex;
                    align-items: center;
                    width: 95%;
                    margin: 0 auto;
                }
                .justifyEnd {
                    justify-content: flex-end;
                }
                .justifyStart {
                    justify-content: flex-start;
                }
                .messagetext {
                    background: ${globalStyles.colors.darkbackground};
                    color: ${globalStyles.colors.white};
                    padding: 5px 10px;
                    border-radius: 0.8em;
                    word-break: break-word;
                }
                .currentuser {
                    background: ${globalStyles.colors.darkblue};
                }
                .senttext{
                    color: ${globalStyles.colors.darkbackground};
                }
                .ml-5{
                    margin-left: 5px;
                }
                .mr-5 {
                    margin-right: 5px;
                }
            `}</style>
        </div>
    )
}

export default Message;