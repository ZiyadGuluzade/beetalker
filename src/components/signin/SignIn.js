import React from 'react';
import './signin.css';

class Signin extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='signin-container'>
          <div className='form-div'>
              <h2 className='form-title'>Log in</h2> 
            

              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" />  
                  
                </p>
              </div>
              <div className="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" />
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button signin-btn">
                    Login
                  </button>
                </p>
              </div>
              <ul className='sign-up-list'>
                <li><a href='#'>Sign up as a student</a></li>
                <li><a href='#'>Sign up as a tutor</a></li>
            </ul>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Signin;