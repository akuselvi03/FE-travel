import React from 'react';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Offers from '../Offers/Offers';
import ServiceTwo from '../ServiceTwo/ServiceTwo';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServiceTwo></ServiceTwo>
            <Features></Features>
            <Offers></Offers>
        </div>
    );
};

export default Home;