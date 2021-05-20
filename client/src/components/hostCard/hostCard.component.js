// import React from 'react';
import './hostCard.component.css';

const HostCardComp = ({ hostData, sendData }) => {

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    const handleClick = (e) => {
        sendData(hostData);
    }

    return (
        <div className='host-card-cont' onClick={(e) => handleClick(e)}>
            <img 
                className='host-img' 
                src={`data:image/jpeg;base64,${arrayBufferToBase64(hostData.image.data)}`} 
                alt="host card"
            />
            <div className='host-some-details'>
                <div className='host-region-details'>
                    <p className='par-sentence'>
                        <span className='sentence'>Rent this apartment in</span><br/> 
                            {hostData.city.toUpperCase()}<br/>
                            {hostData.country.toUpperCase()}
                    </p>
                </div>
                <div className='host-description'>
                    {hostData.description}
                </div>
                <div className='host-price-detail'>
                    <p className='par-price'>
                        {hostData.price}$
                        <span className='night'> / night</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HostCardComp;