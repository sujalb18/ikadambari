import React from 'react'
import ikadambarilogo from './images/ikadambari sasta logo.png'

export default function Register() {
    return (
        <>
            <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
                <div className='my-5'>
                    <img src={ikadambarilogo} width='200px' />
                </div>
                <div className='w-25'>
                    <form>
                        <div class="form-group my-3">
                            <label for="exampleInputName">First Name</label>
                            <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter First Name" />
                        </div>
                        <div class="form-group my-3">
                            <label for="exampleInputName">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter First Name" />
                        </div>
                        <div class="form-group my-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group my-3">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        {/* <div class="form-check required">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
              <label class="form-check-label" area-required for="exampleCheck1">Agree to our <a href='#'>Terms and Condition</a></label>
            </div> */}
                        <div className='buttons my-5'>
                            <button type="submit" class="btn btn-danger w-100">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
