import React from 'react';

import './button.component.css';

const ButtonComp = ({ clsName, inputValue }) => {


    return (
        <input type='button' className={clsName} value={inputValue} />
    );
};

export default ButtonComp;