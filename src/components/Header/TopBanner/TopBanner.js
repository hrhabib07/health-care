import {  faPhoneVolume, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from "../../../images/logo.png"
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="container top-banner-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>
                <FontAwesomeIcon icon={faPhoneVolume} /> 
                    +(880) 123-4567</h2>
            
                <small>For a Consultation Call</small>
            </div>
            <div>
            <h2>
                <FontAwesomeIcon icon={faSearchLocation} />
                Our Clinic</h2>
                <small>4958 Habibnogor Street, SubhaniGath, <br />
                     Sylhet, Bangladesh.</small>
            </div>
        </div>
    );
};

export default TopBanner;