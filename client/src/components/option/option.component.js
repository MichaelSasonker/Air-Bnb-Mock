import React from 'react';
import './option.component.css'

const OptionComp = ({ optionValue }) => {

    return (
        <option className='my-item' value={optionValue}>{optionValue}</option>
    );
}

export default OptionComp;