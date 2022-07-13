import React from 'react'
import { Link } from 'react-router-dom';

import './talents.css';

const Talents = () => {
  return (
    <div className='theConnect__talents section__padding'>
      <div className="theConnect__talents-container">
        <div className="theConnect__talents-box box-1">
            <h4>Now Open</h4>
            <h1>Applications for Skillup Africa DSEP Cohort 4 is now open!!!. Click the button below to learn more.</h1>
            <button>Register Now <i></i></button>
        </div>
        <div className="theConnect__talents-box box-2">
            <h4>ONLINE CLASS</h4>
            <h1>Can't come onsite? We also have you in mind, it's coming soon!!. Click the button below to be the first to get notified</h1>
            <button>Get Notified <i></i></button>
        </div>
      </div>
      <div className='theConnect__talents-badge'>
        <div className="theConnect__talents-badge_header">
          <h3>Application for Cohort 4 of Symbolic D.C's Digital Skills Empowerment Program in now Open.</h3>
          <Link to=''>Register Now!</Link>
        </div>
        <p>Our 6 weeks onsite, intensive training program scheduled to commence in July 2022 is currently receiving applications . Apply now for an opportunity to be a part of the program.</p>
      </div>
  </div>
  )
}

export default Talents