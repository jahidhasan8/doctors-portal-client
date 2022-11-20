import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error=useRouteError()
     const{logOut}=useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <p className="text-3xl text-red-600">Something went wrong.........</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogOut}>Sign Out  </button> and log back in</h4>
        </div>
    );
};

export default DisplayError;