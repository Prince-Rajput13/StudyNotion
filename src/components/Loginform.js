import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function Loginform({setLoggedin}) {
    const [formdata, setFormdata]=useState({email:"",password:""});
    const [visible,setvisible] = useState(false);
    const navigate= useNavigate();
    function changeHandler(event){
        setFormdata((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }

        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setLoggedin("true");
        toast.success("Logged In Successfully");
        navigate('/Dashboard')
    }
  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input
             required
             type='email'
             value={formdata.email}
             onChange={changeHandler}
             placeholder='Enter your email'
             name="email"
             className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]'
             />
             
        </label>
        <label className='w-full relative'>
            <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>Password<sup className='text-pink-200'>*</sup></p>
            <input
             required
             type={visible ? "text":"password"}
             value={formdata.password}
             onChange={changeHandler}
             name= "password"
             placeholder='Enter Password'
             className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]'
             />
        <span 
        className='absolute right-3 top-[38px] cursor-pointer'
        onClick={()=>setvisible((prev)=>!prev)}>
            {visible ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
        </span>
        <Link to="#">
            <p className='text-xs mt-1 ml-auto text-blue-100 max-w-max'>Forgot Password</p>
        </Link>
        </label>
        <button className='text-richblack-900 bg-yellow-50 rounded-[8px] font-medium px-[12px] py-[8px] mt-6 '>
            Sign In
        </button>
    </form>
  )
}

export default Loginform