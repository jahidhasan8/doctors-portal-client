import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div className='mx-5'>
            <h2>this is home</h2>
            <Banner></Banner>
            {/* <Address></Address> */}
        <InfoCards></InfoCards>
        <Services></Services>
        </div>
    );
};

export default Home;