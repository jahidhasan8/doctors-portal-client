import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const {logIn}=useContext(AuthContext)

    const handleLogin = data => {
        console.log(data);
        logIn(data.email,data.password)
        .then(result=>{
            const user=result.user 
            console.log(user);
        })
        .catch(error=>console.log(error))
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
                        <input type="email"  {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
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
                </form>
                <p>New to Doctors portal <Link className='text-secondary' to="/signup">Create New Account</Link></p>
                <div className="divider text-slate-600">OR</div>
                <button className='btn btn-outline w-full btn-primary'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;