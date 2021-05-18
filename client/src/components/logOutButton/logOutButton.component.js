import React from 'react';
import { useHistory } from 'react-router-dom';

import './logOutButton.component.css';

const LogOutButtonComp = ({ logOutFunc }) => {

    const history = useHistory();

    const handleClick = (e) => {
        logOutFunc(e);
        history.push('/');
    }

    return (
        <div className='log-out-btn-cont' onClick={(e) => handleClick(e)}>
            <i className="fas fa-sign-out-alt"></i>
        </div>
    );
}

export default LogOutButtonComp;