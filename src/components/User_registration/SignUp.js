import React from 'react';
import './Registration.css';

const SignUp = () => (
  <>
    <div className="main-section">
      <h1 className="login">Sign Up</h1>
      <form>
        <div className="form-input">
          <label htmlFor="userName">Email</label>
          <input id="userName" type="text" />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="form-action">
          <button type="submit" className="submit-action">Sign in</button>
        </div>
      </form>
    </div>
  </>
);

export default SignUp;
