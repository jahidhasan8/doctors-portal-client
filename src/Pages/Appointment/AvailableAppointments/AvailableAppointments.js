import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions]=useState([])
    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState(null)
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: async () => {
            // const res=await fetch(`https://doctors-portal-server-fawn.vercel.app/appointmentOptions?date=${date}`)
            const res = await fetch(`https://doctors-portal-server-fawn.vercel.app/v2/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch('https://doctors-portal-server-fawn.vercel.app/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentOptions(data))
    // },[])
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;