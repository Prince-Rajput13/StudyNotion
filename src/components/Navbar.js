import React, { lazy, useState } from 'react';
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Navbar(props) {
    let Loggedin=props.Loggedin;
    let setLoggedin=props.setLoggedin;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/">
            <img src={Logo} alt="Logo"width={160} hight={32} loading="lazy"></img>
        </Link>
        <nav>
            <ul className='flex gap-x-6 text-white'>
                <li>
                    <Link to="/"> Home</Link>
                </li>
                <li>
                    <Link to="/"> About</Link>
                </li>
                <li>
                    <Link to="/"> Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
            { !Loggedin &&
                <Link to="/Signup">
                    <button className='bg-richblack-800 text-white rounded-[8px] 
                    py-[8px] px-[12px] border border-richblack-700'>Sign Up</button>
                </Link>
            }
            {!Loggedin &&
               < Link to="/Login">
                    <button className='bg-richblack-800 text-white rounded-[8px] 
                    py-[8px] px-[12px] border border-richblack-700'>Login</button>
                </Link>
            }
            { Loggedin &&
                <Link to="/">
                    <button className='bg-richblack-800 text-white rounded-[8px] 
                    py-[8px] px-[12px] border border-richblack-700' onClick={()=>{
                        toast.success("Logged Out Successfully");
                        setLoggedin(false);
                        }
                        }>Log Out</button>
                </Link>
            }
            { Loggedin &&
                <Link to="/Dashboard">
                    <button className='bg-richblack-800 text-white rounded-[8px] 
                    py-[8px] px-[12px] border border-richblack-700' >Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar