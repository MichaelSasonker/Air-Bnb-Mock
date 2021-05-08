import React from 'react';

const LabelComp = ({ forWhich, labelValue, clsName }) => {

    return (
        <label htmlFor={forWhich} className={clsName}>
            {labelValue}
        </label>
    );
};

export default LabelComp;