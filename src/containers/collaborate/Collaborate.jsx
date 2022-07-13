import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./collaborate.css";

const Collaborate = () => {
  return (
    <div className="theConnect__collaborate-content ">
        <div className="theConnect__collaborate-content__container section__padding">
            <div className="theConnect__collaborate-content__header">
                <h4>WE CAN ACHIEVE ALOT TOGETHER</h4>
                <h3>Let's <br />Collaborate</h3>
            </div>
            <div className="theConnect__collaborate-content__bottom">
                <p>We are committed to our mission of providing young Africans with high-quality Tech skills that are viable globally and also connecting them to life-changing opportunities across the globe. If we can do this much alone, imagine what we can achieve together</p>
                <div className='bottom-btn'>
                    <Link to="/contact">Contact us </Link>
                    <RiArrowRightLine  color="#caf6ff" size={24}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collaborate