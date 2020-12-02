import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import globalStyles from './common/globalStyles';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="container">
            <div className="wrapper">
                <InfoBar room={room} />
                <div className="messagewrapper"></div>
                {/* <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} /> */}
            </div>
            <style jsx="true">{`
                .container {
                    width: 40%;
                    margin: 0 auto;
                    border: 2px solid ${globalStyles.colors.darkbackground};
                    border-radius: 0.2em;
                }
                .messagewrapper {
                    height: 400px;
                    background: ${globalStyles.colors.white};
                }
            `}</style>
        </div>
    )
}

export default Chat;