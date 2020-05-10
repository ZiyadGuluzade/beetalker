import React from 'react';
import './signup.css';

class Signin extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='container form-div'>
          <div className='title-div'>
            <h2 className='form-title'>Log in</h2>
          </div>  
          <div className='sign-up-links'>
            <a href='#'>Sign up as a student</a>
            <a href='#'>Sign up as a tutor</a>
          </div>
          <form>
            <label for='email'>Email</label>
            <input type='text' id='email' />
            <label for='password'>Password</label>
            <input id='password' type='password'/>
            <button className='login-btn'>Log in</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Signin;