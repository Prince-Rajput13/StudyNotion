import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
function Login({setLoggedin}) {
  return (
      <Template
      title='Welcome Back' 
      dec1="Build skills for today, tommorow, beyond"
      dec2="Education to future proof your careeer"
      image={loginImg}
      formtype="Login"
      setLoggedin={setLoggedin}
      />
  )
}

export default Login