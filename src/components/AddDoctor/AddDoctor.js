import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctors } from '../../redux/doctor';
import { loginusers } from '../../redux/user';
import logo from '../../assets/doctora.png';
import '../SignUp/Signup.css';
import './AddDoctor.css';

function AddDoctor() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const addsDoctor = (e) => {
    e.preventDefault();

    const addDoctor = {
      token: user.token,
      name: e.target[0].value,
      specialization: e.target[1].value,
      picture: e.target[2].value,
    };

    dispatch(addDoctors(addDoctor, { type: 'ADD_DOCTORS' }));
  };

  const signOut = () => {
    dispatch(loginusers([]));
    window.location = '/login';
  };

  return (
    <div className="signup-container">
      <div className="header">
        <div className="logos">
          <img src={logo} alt="logo" className="admin-logo" />
        </div>
        <div className="signs-out">
          <p className="welcome">
            Welcome
            {user.username}
          </p>
          <button type="button" className="admin-signout" onClick={signOut}>Log out</button>
        </div>
      </div>
      <form className="sinup-form" onSubmit={addsDoctor}>
        <h2>Add New Doctor</h2>
        <input type="text" className="form-input" name="name" required placeholder="name" />
        <input type="text" className="form-input" name="specialty" required placeholder="Specialty" />
        <input type="text" className="form-input" name="photo" required placeholder="Add Link to profile photo" />
        <button type="submit" className="sigup-submit-btn">Add Doctor</button>
      </form>

    </div>
  );
}

export default AddDoctor;
