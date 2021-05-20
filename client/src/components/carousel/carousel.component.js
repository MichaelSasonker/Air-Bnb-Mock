import React from 'react';
// import Article from '../article/article';
import HostCard from '../hostCard/hostCard.component';
import { Link } from 'react-router-dom';
import './carousel.component.css';


const CarouselComp = ({ hostsData, isClicked }) => {

    const [currHostCard, setCurrHostCard] = React.useState(0);

    const handleClicked = (hostDataObj) => {
        // isClicked(dataObj);
        // console.log(hostDataObj.owner)
        isClicked(hostDataObj)
    }

    return (
        <div className="carousel-cont">
            {
                hostsData.length > 0 
                ? hostsData.map((obj,index) => {
                    if (index === currHostCard) {
                        return (
                            <React.Fragment key={index}>
                                <div className="carousel-inner" >
                                    <div className="carousel-left" onClick={() => {currHostCard > 0 && setCurrHostCard(currHostCard - 1)}}>
                                        <i className="fas fa-chevron-left fa-lg"></i>
                                    </div>
                                    <Link to={`/${obj.owner}}`}>
                                        <HostCard hostData={obj} key={index} sendData={handleClicked} /> 
                                    </Link>
                                    <div className="carousel-right" onClick={() => {currHostCard < hostsData.length - 1 && setCurrHostCard(currHostCard + 1)}}>
                                        <i className="fas fa-chevron-right fa-lg"></i>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    }
                  })
                : ''
            }
        </div>
    );
}

export default CarouselComp;