import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const{register,handleSubmit, formState:{errors}}=useForm()
      
    const{createUser,updateUser}=useContext(AuthContext)
    const [signUpError, setSignUpError]=useState('')
    const[createdUserEmail,setCreatedUserEmail]=useState('')
    const[token]=useToken(createdUserEmail)
    const navigate=useNavigate()
    
    if(token){
        navigate('/')
    }
    const handleSignup=(data)=>{
         console.log(data);
         createUser(data.email,data.password)
         .then(result=>{
            const user=result.user
            console.log(user);
            setSignUpError('')
            toast.success('user created successfully')
            const userInfo={
                displayName:data.name 
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name,data.email)
                
            })
            .catch(error=>toast.error(error.message))

         })
         .catch(error=>{
            // toast.error(error.message)
            setSignUpError(error.message)
        })
    }

    const saveUser=(name,email)=>{
         const user={name,email}
         fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            // getUserToken(email)
             setCreatedUserEmail(email)
         })
    }

   /*  const getUserToken=email=>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.accessToken){
                localStorage.setItem('accessToken',data.accessToken)
                navigate('/')
            }
        })
    } */
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
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please login</Link></p>
               

                <div className="divider text-slate-600">OR</div>
                <button className='btn btn-outline w-full btn-primary'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;