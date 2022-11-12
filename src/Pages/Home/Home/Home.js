import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <h2>this is home</h2>
            <Banner></Banner>
            {/* <Address></Address> */}
        <InfoCards></InfoCards>
        <Services></Services>
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;