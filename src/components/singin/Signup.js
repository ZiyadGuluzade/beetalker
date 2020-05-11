import React from 'react';
import './signup.css';

class Signin extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className='container form-div'>
            <h2 className='form-title'>Log in</h2> 
          <ul className='sign-up-list'>
            <li><a href='#'>Sign up as a student</a></li>
            <li><a href='#'>Sign up as a tutor</a></li>
          </ul>

            {/* <div className='form-1'>
              <form>
                <label for='email'>Email</label>
                <input type='text' id='email' />
                <label for='password'>Password</label>
                <input id='password' type='password'/>
                <button className='login-btn'>Log in</button>
              </form>
            </div> */}

            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Signin;