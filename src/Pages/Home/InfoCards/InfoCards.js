import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cardData=[
        {
            id:1,
           name:'Opening Hours',
           description:'open 9:00am to 5:00 pm everyday',
           icon:clock,
           bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
           name:'Our Locations',
           description:'Brooklyn, NY 10036, United States',
           icon:marker,
           bgClass:'bg-accent'
        },
        {
            id:3,
           name:'Contact Us',
           description:'+8801929532389',
           icon:phone,
           bgClass:'bg-gradient-to-r from-primary to-secondary'
        },

    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-6'>
            {
                cardData.map(card=><InfoCard key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;