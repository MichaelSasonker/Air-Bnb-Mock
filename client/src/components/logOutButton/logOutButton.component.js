import React from 'react';

import './logOutButton.component.css';

const LogOutButtonComp = ({ logOutFunc }) => {

    const handleClick = (e) => {
        logOutFunc(e);
    }

    return (
        <div className='log-out-btn-cont' onClick={(e) => handleClick(e)}>
            <i class="fas fa-sign-out-alt"></i>
        </div>
    );
}

export default LogOutButtonComp;