import React from 'react';

import globalStyles from './common/globalStyles';
import sendIcon from '../assets/send.svg';

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
        <button className="sendbtn" onClick={(e) => sendMessage(e)}><img src={sendIcon} alt="send icon" /></button>
        <style jsx="true">{`
            .form {
                display: flex;
                align-items: center;
            }
            .input {
                width: 90%;
                height: 30px;
                outline: none;
            }
            .sendbtn {
                width: 8.4%;
                height: 36px;
                background: ${globalStyles.colors.lightblue};
                outline: none;
                cursor: pointer;
            }
            .sendbtn img {
                width: 17px;
            }
        `}</style>
    </form>
)

export default Input;