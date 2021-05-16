import React from 'react';


const InputFormComp = ({ name, labelValue, inputType, inputPlaceHolder, changeFunc, errorValue  }) => {

    const [someValue, setSomeValue] = React.useEffect('');

    const handleChange = (e) => {
        setSomeValue(e.target.value);
        changeFunc(e.target.value);
    }

    return (
        <div className='form-inputs'>
            <label className='form-label' htmlFor={name}>{labelValue}</label>
            <input
                className='form-input'
                id={name}
                type={inputType}
                name={name}
                placeholder={inputPlaceHolder}
                value={someValue}
                onChange={(e) => handleChange(e)}
            />
            {errorValue[name] && <p>{errorValue[name]}</p>}
        </div>
    );
}

export default InputFormComp;