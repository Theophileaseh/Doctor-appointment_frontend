import React from 'react';
import './Registration.css';

const Login = () => (
  <>
    <div className="main-section">
      <h1 className="login">Login</h1>
      <form>
        <div className="form-input">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>email</label>
          <input type="text" />
        </div>
        <div className="form-action">
          <button type="submit" className="submit-action">Sign in</button>
        </div>
      </form>
    </div>
  </>
);

export default Login;
