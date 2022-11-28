import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsers } from '../../redux/user';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const addusers = (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target[0].value,
      birth_date: e.target[1].value,
      gender: e.target[2].value,
      email: e.target[3].value,
      password: e.target[4].value,

    };

    if (e.target[4].value === e.target[5].value) {
      dispatch(addUsers(newUser, { type: 'ADD_USERS' }));
    } else {
      // eslint-disable-next-line no-alert
      alert('Passwords Do Not Match');
    }
  };

  useEffect(() => {
    if (user.role === 'normal' && user.token) {
      navigate('/login');
    }

    if (user.role === 'admin' && user.token) {
      navigate('/login');
    }
  });

  return (
    <div className="signup-container">
      <form className="sinup-form" onSubmit={addusers}>
        <h2>Sign Up</h2>
        <input type="text" className="form-input" name="name" required placeholder="name" />
        <input type="date" className="form-input" name="birth-date" required placeholder="Date Of Birth" />
        <input type="text" className="form-input" name="gender" required placeholder="Gender" />
        <input type="email" className="form-input" name="email" required placeholder="email" />
        <input type="password" className="form-input" name="password" required placeholder="password" />
        <input type="password" className="form-input" name="confirmPassword" required placeholder="confirm password" />
        <button type="submit" className="sigup-submit-btn">Sign Up</button>
      </form>

    </div>
  );
}

export default Signup;
