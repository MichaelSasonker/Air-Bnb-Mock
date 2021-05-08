import React from 'react';

import './input.component.css'

const InputComp = ({ clsName, inputType, inputPlaceHolder }) => {

    const [inputValue, setInputValue] = React.useState('');

    const changeHandler = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
        //TODO: create search!!!
    }

    return (
        <input 
            type={inputType}
            className={clsName} 
            placeholder={inputPlaceHolder} 
            value={inputValue}
            onChange={(e) => changeHandler(e)} 
        />
    );
}

export default InputComp;