import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import './AddDoctors.css';
import '../SignUp/Signup.css';

function AddDoctorsForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const authUsers = (e) => {
    e.preventDefault();

    const AddDoctors = {
      email: e.target[0].value,
      password: e.target[1].value,

    };
    dispatch((AddDoctors, { type: 'CREATE_DOCTORS' }));
  };

  useEffect(() => {
    if (user.username) {
      window.location = '/doctors';
    }
  });

  return (
    <div className="signup-container">
      <form className="sinup-form" onSubmit={authUsers}>
        <h2>ADD DOCTORS</h2>
        <input type="text" className="form-input" name="name" required placeholder="doctor" />
        <input type="text" className="form-input" name="specialization" required placeholder="specialization" />
        <input type="file" className="form-input" name="picture" required placeholder="select" />
        <button type="submit" className="sigup-submit-btn"> submit</button>
      </form>

    </div>
  );
}

export default AddDoctorsForm;
