import React from 'react';
import { Link } from 'react-router-dom';
import logoB from '../../assets/logoB.png';
import './footer.css';

const Footer = () => (
  <div className="theConnect__footer section__padding">

    <div className="theConnect__footer-links">
        <div className="theConnect__footer-links_div">
          <h4>About</h4>
          <Link to="./">Symbolic Digital Concept</Link>
          <p>Collaborate</p>
          <p>Gallery</p>
        </div>


        <div className="theConnect__footer-links_div">
          <h4>Social</h4>
          <Link to="https://twitter.com">Linkedin</Link>
          <Link to="https://twitter.com/SymbolicConcept">Twitter</Link>
          <Link to="https://bit.ly/Symbolic-DC">WhatsApp</Link>
        </div>

        <div className="theConnect__footer-links_div">
          <h4>Contact</h4>
          <p>+2349133620002</p>
          <Link to="https://bit.ly/Symbolic-DC">Chat on WhatsApp</Link>
          <p>symbolicdigit@gmail.com</p>
        </div>

        <div className="theConnect__footer-links_div">
          <h4>Address</h4>
          <p>Bosso Estate</p>
          <p>Bosso </p>
          <p>Minna </p>
          <p>Nigeria</p>
        </div>
    </div>

    <div className="theConnect__footer-copyright">
        <div className="theConnect__footer-links_logo">
            <img src={ logoB } alt="gpt3_logo" />
            
          </div>
          <div className="theConnect__footer-copyright_text">
            <p>Tech For The Young</p>
            <p>@2022 Symbolic Digital Concept - All rights reserved.</p>
          </div>
    </div>
  </div>
);

export default Footer;