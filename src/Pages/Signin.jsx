import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"
import Forget from './Forget'
import Signup from './Signup'
import { FcGoogle} from "react-icons/fc";
import { IconContext } from 'react-icons/lib'
const Signin = () => {
  return (
    <div className='maindiv'>
      <div className="signin">
          <form className="form-signin">
              <h2>Login</h2>
              <label>Username<span>*</span></label>
              <br />
              <br />
              <input type="text" placeholder='Enter your username' />
              <br/>
              <label>Password<span>*</span></label>
              <br />
              <br />
              <input type="password" required placeholder='Enter your password' />
              <br />
              <Link to="/forgetpassword" className='p1'>Forgot password?</Link>
              <Link to="/signup" className='p2'>New User?</Link>
              <br />
              <br />
              <Link to="/home" className='p3'>Submit</Link>
              
          </form>
          <hr />
          <p className='sign-log'>or sign in with?</p>
          <div className='log-icons'>
              <a href="#" className='fa fa-google'></a>
              <a href="#" className='fa fa-github'></a>
              <a href="#" className='fa fa-facebook'></a>
          </div>
      </div>
    </div>
  )
}

export default Signin