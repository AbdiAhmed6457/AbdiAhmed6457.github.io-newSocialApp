import './Register.css'

export default function Register() {
  return (
   <div className="login">
       <div className='loginWrapper'>
            <div className="loginLeft">
                <h3 className="loginLogo">AbdiSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on AbdiSocial</span>
            </div>
       <div className="loginRight">
         <div className="loginBox">
            <input placeholder='Username' className="loginInput" />
            <input placeholder='Email' className="loginInput" />
            <input placeholder='password' className="loginInput" />
            <input placeholder='Confirm password' className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log In to Account </button>
         </div>
       </div>
    </div>
   </div> 
    
  )
}

  

