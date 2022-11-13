import React from 'react';

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
    const { name, slots} = appointmentOption

    return (
        <div className="card shadow-xl text-slate-600">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length >0? slots[0]:'Try another day'}</p>
                <p>{slots.length} {SVGFEColorMatrixElement.length >1 ? 'Spaces' :'Space'} available</p>
                <div className="card-actions justify-center">
                   
                    <label onClick={()=>setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary text-white font-semibold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;