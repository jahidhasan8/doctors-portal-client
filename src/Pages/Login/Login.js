import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const {logIn,googleLogin,resetPassword}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const [userEmail,setUserEmail]=useState('')
    const navigate=useNavigate()
    const[loginError, setLoginError]=useState('')
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'

    const handleLogin = data => {
        setUserEmail(data.email)
        console.log(data);
        setLoginError('')
        logIn(data.email,data.password)
        .then(result=>{
            const user=result.user 
            console.log(user);
            toast.success('user login successfully')
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error.message)
            setLoginError(error.message)
        
        })
    }

    const handleGoogleLogin=()=>{
        googleLogin(googleProvider)
        .then(result=>{
            const user=result.user
            console.log(user);
            toast.success('Google login Successful')
        })
        .catch(error=>setLoginError(error.message))
    }

    const handleResetPassword=()=>{
        resetPassword(userEmail)
        .then(()=>{
            toast.success('Please check you email for reset password')
        })
        .catch(error=>toast.error(error.message))
    }
    
    return (
        <div className="h-[600px] flex justify-center items-center text-slate-600">
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  type="email"  {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer" } })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget password?</span>
                        </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                 <input className='btn btn-accent w-full' value="Login" type="submit" />

                 <div>
                    {loginError && <p className='text-red-500'>{loginError}</p>}
                 </div>
                </form>
                <p>New to Doctors portal <Link className='text-secondary' to="/signup">Create New Account</Link></p>
               {/*  <p onClick={handleResetPassword} className='text-warning text-center font-bold'>Forget password?</p> */}
                <button onClick={handleResetPassword} className='text-warning  font-bold'>Forget password?</button>
                <div className="divider text-slate-600">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full btn-primary'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;