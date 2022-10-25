import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={sidebar ? 'navbar active' : 'navbar'}>
      <div className="navbar-menu">
        <div className="navbar-menu-logo">
          <img src="" alt="logo" />
        </div>
        <div className="navbar-main-menu">
          {/* <Link className="nav-links" to="/">Doctors</Link>
        <Link className="nav-links" to="/">Doctors</Link>
        <Link className="nav-links" to="/">Doctors</Link>
        <Link className="nav-links" to="/">Doctors</Link>
        <Link className="nav-links" to="/">Doctors</Link> */}
        </div>
      </div>
      <div className="navbar-toggle">
        <div className="navbar-toggler">
          <button type="button" onClick={() => setSidebar(!sidebar)}>click</button>
        </div>
      </div>

    </div>
  );
};

export default Nav;
