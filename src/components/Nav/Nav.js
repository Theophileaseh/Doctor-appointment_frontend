import React, { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaFacebook, FaPinterestP } from 'react-icons/fa';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/doctora.png';
import './Nav.css';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const activeLink = (isActive) => (isActive ? { background: '#98bf0c', color: '#fff' } : undefined);

  return (
    <div className={sidebar ? 'navbar active' : 'navbar'}>
      <div className="navbar-menu">
        <div className="navbar-menu-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="navbar-main-menu">
          <NavLink to="/" style={({ isActive }) => activeLink(isActive)} className="nav-links">Doctors</NavLink>
          <NavLink to="/a" style={({ isActive }) => activeLink(isActive)} className="nav-links">Add Reservation</NavLink>
          <NavLink to="/b" style={({ isActive }) => activeLink(isActive)} className="nav-links">My Reservations</NavLink>
          <NavLink to="/c" style={({ isActive }) => activeLink(isActive)} className="nav-links">Add Doctor</NavLink>
          <NavLink to="/d" style={({ isActive }) => activeLink(isActive)} className="nav-links">Remove Doctor</NavLink>
          <button type="button" className="sign-out">Log out</button>
        </div>
        <div className="navbar-footer">
          <div className="navbar-social">
            <button type="button" className="social-links">
              <BsTwitter />
            </button>
            <button type="button" className="social-links">
              <FaFacebook />
            </button>
            <button type="button" className="social-links">
              <TiSocialGooglePlus />
            </button>
            <button type="button" className="social-links">
              <BsVimeo />
            </button>
            <button type="button" className="social-links">
              <FaPinterestP />
            </button>
          </div>
          <div className="navbar-footer-info">
            <p className="copyright">
              &copy; &nbsp;
              {new Date().getFullYear()}
              {' '}
              The Team
            </p>
          </div>

        </div>
      </div>
      <div className="navbar-toggle">
        <div className="navbar-toggler">
          <button type="button" className="navbar-button" onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <BiLeftArrow className="toggle-icon" /> : <BiRightArrow className="toggle-icon" /> }
          </button>
        </div>
      </div>

    </div>
  );
};

export default Nav;
