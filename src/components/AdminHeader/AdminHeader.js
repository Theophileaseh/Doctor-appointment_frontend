import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginusers } from '../../redux/user';
import logo from '../../assets/doctora.png';
import './AdminHeader.css';

const AdminHeader = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const signOut = () => {
    dispatch(loginusers([]));
    window.location = '/login';
    localStorage.clear();
  };
  return (
    <div className="header">
        <div className="logos">
          <img src={logo} alt="logo" className="admin-logo" />
        </div>
        <div className="signs-out">
          <p className="welcome">
            Welcome &nbsp;
            {user.username}
          </p>
          <button type="button" className="admin-signout" onClick={signOut}>Log out</button>
        </div>
      </div>
  )
}

export default AdminHeader;