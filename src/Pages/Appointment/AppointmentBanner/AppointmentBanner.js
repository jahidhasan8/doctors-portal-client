
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

   
    return (
        <header className='my-6' style={{
            background:`url(${bg})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair}className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='mr-6'>

                       <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate}>
                       </DayPicker>
                       {/* <p className='text-black'>You have selected Date: {format(selectedDate,'PP')}</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;