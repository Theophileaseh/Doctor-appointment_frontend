import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctors } from '../../redux/doctor';
import '../SignUp/Signup.css';

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

  return (
    <div className="signup-container">
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
