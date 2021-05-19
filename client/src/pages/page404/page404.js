import React from 'react';
import { useHistory } from 'react-router-dom';

import './page404.css';

const Page404 = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="page-404-cont">
            <p className="page-404-error">404</p>
            <p className="page-404-title">We couldn't find the page..</p>
            <p>Sorry, but the page you are looging for was either not found or does not exist.</p>
            <p>Try refreshing the page or click the button below to go back to the Homepage.</p>
            <button className="btn-404" onClick={(e) => handleClick(e)}>
                Back To Homepage
            </button>
        </div>
    );
}

export default Page404;