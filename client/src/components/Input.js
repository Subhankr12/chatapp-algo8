import React from 'react';

import globalStyles from './common/globalStyles';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input 
            className="input" 
            type="text" 
            placeholder="type a message..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} 
        />
        <button className="sendbtn" onClick={(e) => sendMessage(e)}>Send</button>
    </form>
)

export default Input;