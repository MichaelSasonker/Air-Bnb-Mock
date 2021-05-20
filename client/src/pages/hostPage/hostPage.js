import React from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import RentHomeForm from '../../components/rentHomeForm/rentHomeForm.component';
import RentHomeSuccess from '../../components/rentHomeSuccess/rentHomeSuccess.component';

import './hostPage.css';

const HostPage = ({ hostProp }) => {

    const history = useHistory();
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const [hostNameObj, setHostNameObj] = React.useState(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [serverError, setServerError] = React.useState(false);

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    const getHostName = async (hostEmail) => {
        try {
            const respone = await Axios.get(`/api/airBnb/users/getUser/getUserNameByEmail/${hostEmail}`);
            if (!respone.data) {
                console.log('something went wrong!');
                return;
            }
            setHostNameObj(respone.data);

        } catch (err) {
            console.log(err);
        }
    }

    const submitForm = async (values) => {
        //check if renter already exists!!!
        try {
            // const newHost = await createHost(formData, token, localHostBackAddHostURL);
            const newRenter = await Axios({
                method: 'post',
                url: 'http://localhost:8000/api/airBnb/renters/addRenter',
                headers: { Authorization: `Bearer ${token}` },
                data: { 
                    email: values.renterEmail, 
                    phoneNumber: values.phoneNumber,
                    creditCard: values.creditCard 
                }
            });
            console.log(newRenter);

            if (newRenter.error) {
                setServerError(true);
            } else {
                const newAction = await Axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/airBnb/actions/addAction',
                    headers: { Authorization: `Bearer ${token}` },
                    data: {
                        hostEmail: values.hostEmail, 
                        renterEmail: values.renterEmail, 
                        fromDate: values.fromDate,
                        toDate: values.toDate,
                        guestsNumber: values.guestsNumber 
                    }
                });

                if (newAction.error) {
                    setServerError(true);
                } else {
                    setIsSubmitted(true);
                    setTimeout(() => {
                        history.push(`/`);
                    }, 1000);
                }
            }

        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        if (token === null) {
            history.push('/logInPage');
        }
    }, []);

    React.useEffect(() => {
        if (hostProp) {
            getHostName(hostProp.email);
        }
    }, []);
    // console.log(hostProp)
    // console.log(hostNameObj);

    return (
        <div className='host-page-cont'>
            <div className='left'>
                <p className='desc-cont'>{hostProp.description}</p>
                <img 
                    className='host-big-img' 
                    src={`data:image/jpeg;base64,${arrayBufferToBase64(hostProp.image.data)}`} 
                    alt="host big image"
                />
                <p className='host-name'>
                    <span className='sentence'>Entire apartment hosted by </span>
                    {
                        hostNameObj && <span className='fname'>
                            {hostNameObj.firstName} {' '} {hostNameObj.lastName}
                            </span>
                    }
                </p>
                <p className='host-apart-details'>
                    {hostProp.maxGuests} guests <span className='dot'>·</span>
                    {hostProp.rooms} rooms <span className='dot'>·</span>
                    {hostProp.beds} beds <span className='dot'>·</span>
                    {hostProp.bathes} bathes  
                </p>
                <div className='location-details'>
                    <div className='sent'>
                        <span className='head'>Country</span>
                        <span className='val'>{hostProp.country.toUpperCase()}</span>
                    </div>
                    <div className='sent'>
                        <span className='head'>City</span>
                        <span className='val'>{hostProp.city.toUpperCase()}</span>
                    </div>
                    <div className='sent'>
                        <span className='head'>Address</span>
                        <span className='val'>{hostProp.address.toUpperCase()}</span>
                    </div>
                </div>
            </div>
            <div className='right'>
                {
                    !isSubmitted 
                    ? ( <RentHomeForm submitForm={submitForm} hostEmailProp={hostProp.email} isError={serverError} /> ) 
                    : ( <RentHomeSuccess messageProp='Great choice! See you there!' /> )
                }
                {/* <div className='price'>
                    Price{hostProp.price}$
                    <span className='night'> / night</span>
                </div> */}
            </div>

        </div>
    );
}

export default HostPage;