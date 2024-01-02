import { useRef } from 'react';
import Topbar from '../../components/topbar/Topbar'
import './Register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmation = useRef();
  const navigate = useNavigate();

  const handleClick = async(e) => {

    e.preventDefault();
    if(confirmation.current.value !== password.current.value){
      password.current.setCustomValidity("password don't match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try{
        await axios.post("/auth/register", user)
        navigate("/login")
        
      } catch(error){
        console.log(error)
      }
      
    }
  }
  
  return ( 
 <>
   <div className="login">
       <div className='loginWrapper'>
            <div className="loginLeft">
                <h3 className="loginLogo">AbdiSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on AbdiSocial</span>
            </div>
       <div className="loginRight" onSubmit={handleClick}>
         <form className="loginBox">
            <input placeholder='Username' type='text' required ref={username} className="loginInput" />
            <input placeholder='Email' type='email' required ref={email} className="loginInput" />
            <input placeholder='password' min= "6" type='password' required ref={password} className="loginInput" />
            <input placeholder='Confirm password' type='password' required ref={confirmation} className="loginInput" />
            <button className="loginButton" type='Submit'>Sign Up</button>
            <button className="loginRegisterButton">Log In to Account </button>
         </form>
       </div>
    </div>
   </div> 
</>
    
  )
}

  

