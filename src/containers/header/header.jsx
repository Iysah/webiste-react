import React from 'react';
import './header.css';
import { RiArrowRightLine } from 'react-icons/ri';

const Header = () => (
  <div className="theConnect__header section__padding" id="home">
    <div className="theConnect__header-content">
      <div className="space"></div>
      <h1>Learn globally applicable skills to launch your career in technology.</h1>

      <div className="theConnect__header-content__subheader">
            <h3>Symbolic D.C. is a digital skills empowerment organization, providing possibilities for those with extraordinary talent</h3>
            <button type="button">Enroll Now</button>
      </div>
    </div>
    <div className="view">
      <a href='/categories'>Learn 
      More</a><RiArrowRightLine  color="#0c0114" size={24}/>
    </div>
  </div>
);

export default Header;