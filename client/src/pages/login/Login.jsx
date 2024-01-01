import { useContext, useRef } from 'react';
import Topbar from '../../components/topbar/Topbar'
import './Login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@material-ui/core"


export default function Login() {
    const email = useRef();   
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
         loginCall({email: email.current.value , password: password.current.value}, dispatch )
    e.preventDefault()
  }
    console.log(user)
  
  return (
  <>
  {/* <Topbar/> */}
   <div className="login">
       <div className='loginWrapper'>
            <div className="loginLeft">
                <h3 className="loginLogo">AbdiSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on AbdiSocial</span>
            </div>
       <div className="loginRight">
         <form className="loginBox" onSubmit = {handleClick} > 
            <input placeholder='Email' type='email' required className="loginInput" ref = {email} />

            <input placeholder='Password' type='password' 
            minLength="6"  required className="loginInput"  ref = {password} />

            <button type='submit'  disabled = {isFetching} className="loginButton">{ isFetching ? <CircularProgress color='white' size={20}/> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button type = "submit" className="loginRegisterButton">  { isFetching ? <CircularProgress color='white' size={20}/> : "Create a new Account"}</button>
         </form>
       </div>
    </div>
   </div> 
   </>
    
  )
}
