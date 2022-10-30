import './Appointment.css';

import React from 'react';

function Appointment() {
  return (
    <div className="my-appointments-container">
      <div className="my-appointments-head">
        <h2 className="appointments-heading">Your Appointments</h2>
      </div>
      <div className="my-appointments-main">
        <table className="my-appointments-table">
          <tr className="appointments-table-head">
            <th className="appointments-head-data">Doctor</th>
            <th className="appointments-head-data">Date</th>
            <th className="appointments-head-data">Time</th>
            <th className="appointments-head-data">Message</th>
            <th className="appointments-head-data">Action</th>
          </tr>
          <tr className="appointments-table-data">
            <td className="appointments-row-data">Alfreds Futterkiste</td>
            <td className="appointments-row-data">Maria Anders</td>
            <td className="appointments-row-data">Germany</td>
            <td className="appointments-row-data">Germany</td>
            <td className="appointments-row-data data-buttons"><button type="button" className="delete-appointment-button">Delete</button></td>
          </tr>
          <tr>
            <td className="appointments-row-data">Centro comercial Moctezuma</td>
            <td className="appointments-row-data">Francisco Chang</td>
            <td className="appointments-row-data">Mexico</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Appointment;
