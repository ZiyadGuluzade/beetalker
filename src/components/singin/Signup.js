import React from 'react';
import './signup.css';

class Signin extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='container sign-up-container'>
          {/* <span>Use your email for registration</span> */}
          <div className='form-container sign-up-tutor-container'>
            <form action='#'>
            <h2>Sign up as a student</h2>
              <input type='text' placeholder='First name' />
              <input type='text' placeholder='Last name' />
              <input type='email' placeholder='email' />
              <input type='password' placeholder='password' />
              <button className='sign-up-button'>Sign Up</button>
            </form>
          </div>
          <div className='form-container sign-in-student-container'>
            <form action='#'>
            <h2>Sign up as a tutor</h2>
              <input type='text' placeholder='First name'/>
              <input type='text' placeholder='Last name' />
              <input type='text' placeholder='email' />
              <input type='text' placeholder='password' />
              <button className='sign-up-button'>Sign Up</button>
            </form>
          </div>
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-left'>
                <h2>Sign Up as a Student</h2>
                <button className='sign-up-button' id='student'>Sign Up</button>
              </div>
              <div className='overlay-right'>
                <h2>Sign Up as a Tutor</h2>
                <button className='sign-up-button' id='tutor'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Signin;