import React, { useState } from 'react'
import './Login.css'
import logo from '../Login/logo.png'
import { login, signup } from '../../../firebase'
import netflix_spinner from '../../Home/Login/netflix_spinner.gif'

const Login = () => {

  const [signState, setsignState] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const user_auth = async(event)=>{
    event.preventDefault();
    setloading(true);
    if(signState == "Sign In"){
      await login(email, password);
    }
    if(signState == "Sign Up"){
      await signup(name, email, password);
    }
    setloading(false);
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form >
        {signState == "Sign Up"?<input value={name} onChange={(e)=>{setname(e.target.value)}}
         type="text" placeholder='Your name'/>:<></>}
          
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email"  placeholder='Email'/>
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState == "Sign Up"?<p>Already have Account <span onClick={()=>{setsignState("Sign In")}}>Sign In Now</span></p>:
          <p>New to Netflix? <span onClick={()=>{setsignState("Sign Up")}}>Sign Up Now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login