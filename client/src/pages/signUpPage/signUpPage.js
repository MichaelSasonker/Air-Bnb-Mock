import React from 'react';
import InputComp from '../../components/input/input.component';
import LabelComp from '../../components/label/label.component';

const SignUpPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className='sign-up-page-cont'>
            <form onSubmit={(e) => handleSubmit(e)} >
                <LabelComp 
                    forWhich='first-name' 
                    labelValue='First Name:'                
                    clsName='fName-lbl'
                />

            </form>
        </div>
    );
};

export default SignUpPage;