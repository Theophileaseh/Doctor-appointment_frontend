import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginusers } from '../../redux/user';
import '../SignUp/Signup.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const authUsers = (e) => {
    e.preventDefault();

    const loginUser = {
      email: e.target[0].value,
      password: e.target[1].value,

    };
    dispatch(loginusers(loginUser, { type: 'LOGIN_USER' }));
  };

  useEffect(() => {
    if (user.role === 'normal' && user.token) {
      navigate('/doctors');
    }

    if (user.role === 'admin' && user.token) {
      navigate('/add-doctor');
    }
  });

  return (
    <div className="signup-container">
      <form className="sinup-form" onSubmit={authUsers}>
        <h2>Login</h2>
        <input type="email" className="form-input" name="name" required placeholder="email" />
        <input type="password" className="form-input" name="password" required placeholder="password" />
        <button type="submit" className="sigup-submit-btn">Log in</button>
      </form>

    </div>
  );
}

export default Login;
