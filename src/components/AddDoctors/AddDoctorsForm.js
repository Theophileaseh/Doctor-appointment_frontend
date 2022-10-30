import React from 'react';
import './AddDoctors.css';

function AddDoctorsForm() {
  return (
    <div>
      <h1 className="login">Add Doctors</h1>
      <form>
        <div className="form-input">
          <label htmlFor="userName">Name</label>
          <input id="userName" type="text" />
        </div>
        <div className="form-input">
          <label>Specialization</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>Specialization</label>
          <input type="filenpm start" />
        </div>
        <div className="form-action">
          <button type="submit" className="submit-action">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default AddDoctorsForm;
