import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"
function SignUp({setLoggedin}) {
  return (
    <Template
      title='join million of learning to code' 
      desc1="Build skills for today, tommorow, beyond"
      desc2="Education to future proof your careeer"
      image={signupImg}
      formtype="signup"
      setLoggedin={setLoggedin}
      />
  )
}

export default SignUp