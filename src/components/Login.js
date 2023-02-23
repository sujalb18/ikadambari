import React from 'react'
import { Link } from 'react-router-dom'
import ikadambarilogo from './images/ikadambari sasta logo.png'


export default function Login() {

  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{backgroundColor: '#f0f0f0'}}>
        <div className='my-5'>
          <img src={ikadambarilogo} width='400px' />
        </div>
        <div className='authform'>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group my-2">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            {/* <div class="form-check required">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
              <label class="form-check-label" area-required for="exampleCheck1">Agree to our <a href='#'>Terms and Condition</a></label>
            </div> */}
            <div className='buttons my-3'>
            <button type="submit" class="btn btn-danger w-100">Login</button>
            </div>
          </form>
          <p className='marginb'>Don't Have an Account? <Link to='/register'>Register</Link></p>
        </div>
      </div>
    </>
  )
}
