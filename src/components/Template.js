import React from 'react'
import Loginform from './Loginform';
import SignupForm from './SignupForm';
function template({title,dec1,dec2,image,formtype, }) {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{dec1}</span>
                <span>{dec2}</span>
            </p>
        </div>
            {
                formtype==="Login" ? <Loginform/> : <SignupForm/>
            }
        <div>
            <div></div>
            <p>or</p>
            <div></div>
        </div>
        <button>
            Sign in with Google
        </button>
        <div>
            <img src='frame' alt="pattern" width={558} height={504} loading="lazy"></img>
            <img src={image} alt="students" width={228} height={490} loading="lazy"/>
        </div>
    </div>
  )
}

export default template