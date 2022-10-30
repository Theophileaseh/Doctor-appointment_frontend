import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <form>
        <input type="text" name="name" required placeholder="name" />
        <input type="email" name="name" required placeholder="email" />
        <input type="password" name="password" required placeholder="password" />
        <input type="password" name="confirmPassword" required placeholder="confirm password" />
      </form>
      
    </div>
  )
}

export default Signup
