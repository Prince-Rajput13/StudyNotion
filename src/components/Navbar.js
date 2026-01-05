import React, { lazy, useState } from 'react';
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Navbar(props) {
    let Loggedin=props.Loggedin;
    let setLoggedin=props.setLoggedin;
  return (
    <div className='flex justify-evenly'>

        <Link to="/">
            <img src={Logo} alt="Logo"width={160} hight={32} loading="lazy"></img>
        </Link>
        <nav>
            <ul className='flex gap-3'>
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
        <div className='flex ml-5 mr-3 gap-3'>
            { !Loggedin &&
                <Link to="/Signup">
                    <button>Sign Up</button>
                </Link>
            }
            {!Loggedin &&
               < Link to="/Login">
                    <button>Login</button>
                </Link>
            }
            { Loggedin &&
                <Link to="/">
                    <button onClick={()=>{
                        toast.success("Logged Out Successfully");
                        setLoggedin(false);
                        }
                        }>Log Out</button>
                </Link>
            }
            { Loggedin &&
                <Link to="/Dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar