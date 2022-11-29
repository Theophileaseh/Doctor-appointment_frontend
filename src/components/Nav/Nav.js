import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaFacebook, FaPinterestP } from 'react-icons/fa';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { NavLink, useLocation } from 'react-router-dom';
import { showModal } from '../../redux/appointmentModal';
import { loginusers } from '../../redux/user';
import logo from '../../assets/doctora.png';
import './Nav.css';

function Nav() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [sidebar, setSidebar] = useState(false);
  const activeLink = (isActive) => (isActive ? { background: '#98bf0c', color: '#fff' } : undefined);

  const setModal = () => {
    dispatch(showModal({ type: 'SHOW_MODAL' }));
    setSidebar(!sidebar);
  };

  const location = useLocation();

  const signOut = () => {
    dispatch(loginusers([]));
    localStorage.clear();
    window.location = '/login';
  };

  return (
    location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' ? '' : (
      <div className={sidebar ? 'navbar active' : 'navbar'}>
        <div className="navbar-menu">
          <div className="navbar-menu-logo">
            <img className="logo" src={logo} alt="logo" />
            <p className="login-user">
              Hi, &nbsp;
              {user.username}
            </p>
          </div>
          <div className="navbar-main-menu">
            {user.role === 'admin' ? (
              <>
                <NavLink to="/admin-doctors" style={({ isActive }) => activeLink(isActive)} className="nav-links" onClick={() => setSidebar(!sidebar)}>Doctors</NavLink>
                <NavLink to="/add-doctor" style={({ isActive }) => activeLink(isActive)} className="nav-links" onClick={() => setSidebar(!sidebar)}>Add Doctor</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/doctors" style={({ isActive }) => activeLink(isActive)} className="nav-links" onClick={() => setSidebar(!sidebar)}>Doctors</NavLink>
                <NavLink className="nav-links" to onClick={setModal}>Add Appointment</NavLink>

                <NavLink to="/appointments" style={({ isActive }) => activeLink(isActive)} className="nav-links" onClick={() => setSidebar(!sidebar)}>My Appointments</NavLink>
              </>
            )}

            <button type="button" className="sign-out" onClick={signOut}>Log out</button>
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
    )
  );
}

export default Nav;
