import React from 'react';
import { useHistory } from 'react-router-dom';
import OptionComp from '../option/option.component';

import './select.component.css';

const options = ['Sign Up', 'Log In', 'Host your home'];
const linksOption = ['/signUpPage', '/logInPage', '/signUpAsHostPage'];

const SelectComp = () => {

    const [selected, setSelected] = React.useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setSelected(e.target.value);
        handleSelected(e.target.value);
    }

    const handleSelected = (value) => {
        const index = options.indexOf(value);
 
        setTimeout(() => (history.push(linksOption[index])), 200);
    }
    // ui top left pointing dropdown button
    return (
        <select className='select' value={selected} onChange={(e) => handleChange(e)}>
            <option className='place-holder' value="" disabled selected hidden>
                Go to
            </option> 
            { options.map( (optn, index) => <OptionComp key={index} optionValue={optn} /> )}
        </select>
        // <i className="user icon"></i>
    );
}

export default SelectComp;