import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <section className='mt-32 p-6' style={{
            background:`url(${appointment})`}}>
            <div className='text-center '>
                <div>
                    <h5 className='text-xl text-primary'>Contact Us</h5>
                    <p className='text-2xl'>Stay connected with us</p>
                </div>
                <div>
                    <input type="text" placeholder="Type here" className="input my-4 input-bordered input-sm w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <br />
                    <textarea className="textarea w-80 mt-4" placeholder="Bio"></textarea>
                    <br />
                    <PrimaryButton >Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;