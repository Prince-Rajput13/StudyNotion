import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons';
function Loginform() {
    const [formdata, setformdata]=useState({email:"",password:""});
    const [visible,setvisible] = useState(false);
    function changeHandler(event){
        setformdata((prevdata)=>(
            {
                ...prevdata,
                [event.targer.name]:event.target.value
            }

        ))
    }
  return (
    <form>
        <label>
            <p>Email Address<sup>*</sup></p>
            <input
             required
             type='email'
             value={formdata.email}
             onChange={changeHandler}
             placeholder='Enter your email'
             name="email"
             />
             
        </label>
        <label>
            <p>Password<sup>*</sup></p>
            <input
             required
             type={visible ? "text":"password"}
             value={formdata.password}
             onChange={changeHandler}
             name= "password"
             placeholder='Enter Password'/>
        </label>
        <span onClick={()=>setvisible((prev)=>!prev)}>
            {visible ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>}
        </span>
        <Link to="#">
            Forgot Password
        </Link>
        <button >
            Sign In
        </button>
    </form>
  )
}

export default Loginform