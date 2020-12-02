import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import globalStyles from './common/globalStyles';
import Message from './Message';

const Messages = ({ messages, name }) => (
   <ScrollToBottom className="messages">
       {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        <style jsx="true">{`
            .messages {
                height: 400px;
                background: ${globalStyles.colors.white};
            }
        `}</style>
   </ScrollToBottom>
)

export default Messages;