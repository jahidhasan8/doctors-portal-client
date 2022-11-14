import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Address = () => {
    return (
        <div className='flex gap-5 mt-20'>
            <div className='flex bg-primary items-center justify-between w-1/3 rounded-lg'>
                <div className='p-4 py-8'><img src={clock} alt="" /></div>
                <div>
                    <p className='text-white'>Opening Hours</p>
                    <p className='text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>

             <div className='flex bg-accent items-center  w-1/3 rounded-lg'>
                <div className='p-4 py-8'><img src={marker} alt="" /></div>
                <div>
                    <p className='text-white'>Visit our location</p>
                    <p className='text-white'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>

             <div className='flex bg-primary items-center  w-1/3 rounded-lg'>
                <div className='p-4 py-8'><img src={phone} alt="" /></div>
                <div>
                    <p className='text-white'>Contact us now</p>
                    <p className='text-white'>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Address;