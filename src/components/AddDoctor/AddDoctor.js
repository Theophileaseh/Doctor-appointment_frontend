import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDoctors } from '../../redux/doctor';
import '../SignUp/Signup.css';
import './AddDoctor.css';

function AddDoctor() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const addsDoctor = (e) => {
    e.preventDefault();

    const addDoctor = {
      token: user.token,
      user_id: user.id,
      name: e.target[0].value,
      specialty: e.target[1].value,
      photo: e.target[2].value,
      bio: e.target[3].value,
    };

    dispatch(addDoctors(addDoctor, { type: 'ADD_DOCTORS' }));

    navigate('/admin-doctors');
  };

  if (!user.token || user.role !== 'admin') {
    window.location = '/login';
  }

  return (
    <div className="signup-container">
      <form className="sinup-form" onSubmit={addsDoctor}>
        <h2>Add New Doctor</h2>
        <input type="text" className="form-input" name="name" required placeholder="name" />
        <input type="text" className="form-input" name="specialty" required placeholder="Specialty" />
        <input type="text" className="form-input" name="photo" required placeholder="Add Link to profile photo" />
        <textarea className="bio-form-input" placeholder="Add Bio" required />
        <button type="submit" className="sigup-submit-btn">Add Doctor</button>
      </form>

    </div>
  );
}

export default AddDoctor;
