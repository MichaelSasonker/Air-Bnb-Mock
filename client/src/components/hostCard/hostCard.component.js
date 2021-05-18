// import React from 'react';
import './hostCard.component.css';

const HostCardComp = ({ hostData }) => {

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    return (
        <div className='host-card-cont'>
            <img className='host-img' src={`data:image/jpeg;base64,${arrayBufferToBase64(hostData.image.data)}`} alt="host card" />
            <p className='par-city'>{hostData.city.toUpperCase()}</p>
        </div>
    )
}

export default HostCardComp;