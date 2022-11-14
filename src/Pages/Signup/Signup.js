import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const{register,handleSubmit, formState:{errors}}=useForm()
      
    const{createUser}=useContext(AuthContext)

    const handleSignup=(data)=>{
         console.log(data);
         createUser(data.email,data.password)
         .then(result=>{
            const user=result.user
            console.log(user);
         })
         .catch(error=>console.log(error))
    }
    return (
        <div className="h-[600px] flex justify-center items-center text-slate-600">
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Signup</h2>

                <form  onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",{
                            required:"Name is required"
                        })}  className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email',{
                            required:true
                        })}  className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password',{
                            required:"Password is required",
                            minLength:{value:6 , message:'Password must be uppercase number and special characters'},
                            pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'Password must be strong'}
                        })}  className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Signup" type="submit" />
                </form>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider text-slate-600">OR</div>
                <button className='btn btn-outline w-full btn-primary'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;