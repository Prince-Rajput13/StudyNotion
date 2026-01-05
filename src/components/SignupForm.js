import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons';
function SignupForm() {
    const [formdata,setformdata] = useState({first:"", Last:"",email:"",password:"", confirmpassword:""});
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
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form>
            <label>
                <p>First Name<sup>*</sup></p>
                <input 
                    type="text"
                    placeholder='Enter First Name'
                    value={FormData.First}
                    onChange={changeHandler}
                    name="First"
                    Required
                />
            </label>
            <label>
                <p>Last Name<sup>*</sup></p>
                <input 
                    type="text"
                    placeholder='Enter Last Name'
                    value={FormData.Last}
                    onChange={changeHandler}
                    name="Last"
                    Required
                />
            </label>
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

            <div>
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
                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                     required
                     type={visible ? "text":"password"}
                     value={formdata.confirmpassword}
                     onChange={changeHandler}
                     name= "confirmpassword"
                     placeholder='Confirm Password'/>
                </label>
                <span onClick={()=>setvisible((prev)=>!prev)}>
                    {visible ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                </span>
            </div>

            <button>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm