import React from 'react';
import './landingpage.css';

class Landingpage extends React.Component {

  render() {
    return(
      <React.Fragment>
        <section className='landing-page section-1'>
          <div className='container'>
            <div className='landing-page-info'>
              <h1>Beetalker Academy</h1>
              <p>Your success is our ultimate goal</p>
              <a href='#' className='btn'>Learn More</a>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Landingpage;