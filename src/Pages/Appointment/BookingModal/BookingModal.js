import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate,refetch }) => {
    const { name, slots,price } = treatment
    const { user } = useContext(AuthContext)
    // treatment is appointment option
    const date = format(selectedDate, 'PP')

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const patient = form.patient.value
        const email = form.email.value
        const phone = form.phone.value
        const slot = form.slot.value
        //  console.log(name,phone,email,slot,date);

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient,
            slot,
            phone,
            email,
            price
        }

        // todo ...send data to the server
        // and once data is saved then close the modal
        // and display success toast

        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking confirmed')
                    refetch()
                }
                else{
                    toast.error(data.message)
                }
            })
        form.reset()
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-slate-600">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option

                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='patient' type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Your phone number" className="input w-full input-bordered" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Your email" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;