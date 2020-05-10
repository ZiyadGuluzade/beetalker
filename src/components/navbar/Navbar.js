import React from 'react';
import './navbar.css';

class Navbar extends React.Component {

  render() {
    return(
      <React.Fragment>
        <nav className='navbar' id='home'>
          <div className='container'>
            <h1 className='logo'>Logo</h1>
            <ul className='nav-list'>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Sign in</a></li>
              <li><a href='#'>Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

 export default Navbar;