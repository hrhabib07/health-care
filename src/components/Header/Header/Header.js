import React from 'react';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import TopBanner from '../TopBanner/TopBanner';

const Header = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Navigation></Navigation>
            <Slider></Slider>
        </div>
    );
};

export default Header;