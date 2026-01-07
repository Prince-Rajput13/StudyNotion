import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
function SignupForm() {
    const [formdata,setformdata] = useState({first:"", Last:"",email:"",password:"", confirmpassword:""});
    const [visible,setvisible] = useState(false);
    const [confirmvisible,setconfirmvisible] = useState(false);
    const navigate=useNavigate();
    const [accountType,setaccountType]= useState("student")
    function changeHandler(event){
        setformdata((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }

        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formdata.password !== formdata.confirmpassword){
            toast.error("Password not matched");
            return;
        }
        navigate('/Dashboard');
        toast.success("Account Created Successfully");
    }
  return (
    <div>
        <div className="flex max-w-max rounded-full p-1 gap-x-1 bg-richblack-800 my-6">
            <button onClick={()=>setaccountType("student")} 
            className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} duration-200 rounded-full py-2 px-5 transition-all`}>Student</button>
            <button onClick={()=>setaccountType("instructor")}
            className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} duration-200 rounded-full py-2 px-5 transition-all`} >Instructor</button>
        </div>
        <form onSubmit={submitHandler}>
            <div className="flex gap-x-4 mt-[20px]">
            <label className="w-full">
                <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>First Name<sup>*</sup></p>
                <input 
                    type="text"
                    placeholder='Enter First Name'
                    value={FormData.First}
                    onChange={changeHandler}
                    name="First"
                    Required
                    className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]'
                />
            </label>
            <label className="w-full">
                <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>Last Name<sup>*</sup></p>
                <input 
                    type="text"
                    placeholder='Enter Last Name'
                    value={FormData.Last}
                    onChange={changeHandler}
                    name="Last"
                    Required
                    className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]'
                />
            </label>
            </div>
            <div className="mt-[20px] ">

            <label className="w-full">
                <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>Email Address<sup>*</sup></p>
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
            </div>

            <div className="flex gap-x-4 mt-[20px]">
                <label className="relative w-full">
                    <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>Password<sup>*</sup></p>
                    <input
                     required
                     type={visible ? "text":"password"}
                     value={formdata.password}
                     onChange={changeHandler}
                     name= "password"
                     className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]'
                     placeholder='Enter Password'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setvisible((prev)=>!prev)}>
                    {visible ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                </span>
                </label>
                <label className="relative w-full">
                    <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]'>Confirm Password<sup>*</sup></p>
                    <input
                     required
                     type={visible ? "text":"password"}
                     value={formdata.confirmpassword}
                     onChange={changeHandler}
                     name= "confirmpassword"
                     className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]'
                     placeholder='Confirm Password'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setconfirmvisible((prev)=>!prev)}>
                    {confirmvisible ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                </span>
                </label>
            </div>

            <button className='text-richblack-900 bg-yellow-50 rounded-[8px] font-medium px-[12px] py-[8px] mt-6 '>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm