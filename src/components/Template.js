import React from 'react'

function template({title,dec1,dec2,image,formtype, Loggedin}) {
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
                formtype==="Login" ? <LoginForm/> : <SignupForm/>;
            }
        <div>
            <div></div>
            <p>or</p>
            <div></div>
        </div>
        <button>
            Sign in with Google
        </button>


    </div>
  )
}

export default template