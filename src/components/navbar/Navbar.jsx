import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="theConnect__navbar">
        <div className="theConnect__navbar-links">
            <div className="theConnect__navbar-links_logo">
                <Link to="/">
                  <h3>SYMBOLIC D.C.</h3>
                </Link>
                
            </div>
            <div className="theConnect__navbar-links_container">
                <p><Link to="/home">Home</Link></p>
                <p><Link to="/past">About Us</Link></p>
               <p><Link to="/future">Collaborate</Link></p>
                <p><Link to="/about">Gallery</Link></p>

            </div>
        </div>

      <div className="theConnect__navbar-sign">
        <button type="button" >Let's Talk</button>
      </div>

      <div className="theConnect__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
            <div className="theConnect__navbar-menu_container scale-up-center">
                <div className="theConnect__navbar-menu_container-links">
                      <p><Link to="/home">Home</Link></p>
                      <p><Link to="/past">About Us</Link></p>
                      <p><Link to="/future">Collaborate</Link></p>
                      <p><Link to="/about">Gallery</Link></p>
                </div>
            <div className="theConnect__navbar-menu_container-links-sign">
                <button type="button">Let's Talk</button>
            </div>
            </div>
        )}
      </div>
      <Outlet />

     
     
    </div>
  );
};

export default Navbar;