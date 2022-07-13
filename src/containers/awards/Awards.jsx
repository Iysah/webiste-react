import React from 'react'
import { Link } from "react-router-dom";
import './awards.css'

const Awards = () => {
  return (
    <div className="theConnect__award " id="home">
      <div className="theConnect__award-container section__padding">
          <div className="theConnect__award-image">
                <img src="https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=600" alt='Award winning team' />
          </div>

        <div className="theConnect__award-content">
            <div className="theConnect__award-content__header">
                <h3>Who we are and What we do</h3>
                <div></div>
            </div>
    
      
              <p> Our expertise is in providing young Africans with opportunity and assistance in learning internationally applicable tech skills.
              </p>

              <Link to="/about">About Us</Link>
        </div>
      </div>

    
  </div>
  )
}

export default Awards