import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaFacebook, FaPinterestP } from 'react-icons/fa';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import { showModal } from '../../redux/appointmentModal';
import logo from '../../assets/doctora.png';
import './Nav.css';

function Nav() {
  const dispatch = useDispatch();

  const setModal = () => {
    dispatch(showModal({ type: 'SHOW_MODAL' }));
  };

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
          <NavLink style={({ isActive }) => activeLink(isActive)} className="nav-links" onClick={setModal}>Add Appointment</NavLink>
          <NavLink to="/appointments" style={({ isActive }) => activeLink(isActive)} className="nav-links">My Appointments</NavLink>
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
}

export default Nav;
