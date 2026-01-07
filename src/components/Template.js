import React from 'react'
import Loginform from './Loginform';
import SignupForm from './SignupForm';
import frameImg from "../assets/frame.png"
import {FcGoogle} from "react-icons/fc"
function Template({title,dec1,dec2,image,formtype, setLoggedin}) {
  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] gap-x-12 gap-y-0 py-12 mx-auto'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875 rem] leading-[2.375rem]' >{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4 '>
                <span className='text-richblack-100'>{dec1}</span>
                <br></br>
                <span className='text-blue-100 italic'>{dec2}</span>
            </p>
            {
                formtype==="Login" ? <Loginform setLoggedin={setLoggedin}/> : <SignupForm setLoggedin={setLoggedin}/>
            }
        <div className='flex w-full items-center gap-x-2 my-4'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading[1.375rem]'>or</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className='w-full text-richblack-100 border-richblack-700 py-[8px] 
                flex justify-center items-center gap-x-2 mt-6 rounded-[8px] px-[12px] border'>
            <FcGoogle/>
            Sign in with Google
        </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] '> 
            <img src={frameImg} alt="Pattern" width={558} height={504} loading="lazy"></img>
            <img src={image} alt="Students" width={558} height={490} loading="lazy"
             className='absolute -top-4 right-4'/>
        </div>
    </div>
  )
}

export default Template