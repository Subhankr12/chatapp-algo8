import React from 'react';

import globalStyles from './common/globalStyles';
import onlineIcon from '../assets/online.svg';
import closeIcon from '../assets/close.svg';

const InfoBar = ({ room }) => (
    <div className="infobar">
        <div className="leftwrapper">
            <img className="icon onlineicon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
        </div>
        <div className="rightwrapper">
            <a href="/"><img className="icon" src={closeIcon} alt="close icon" /></a>
        </div>
        <style jsx="true">{`
            .infobar {
                border-bottom: 2px solid ${globalStyles.colors.darkbackground};
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 30px;
                background: ${globalStyles.colors.lightblue};
                color: ${globalStyles.colors.white};
                padding: 0 10px;
            }
            .leftwrapper {
                display: flex;
            }
            .icon {
                width: 10px;
                margin-right: 10px;
            }
        `}</style>
    </div>
)

export default InfoBar;