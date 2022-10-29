import './Appointment.css';

import React from 'react'

const Appointment = () => {
  return (
    <div className="my-appointments-container">
      <div className="my-appointments-head">
        <h2 className="appointments-heading">Your Appointments</h2>
      </div>
      <div className="my-appointments-main">
      <table className="my-appointments-table">
  <tr className="appointments-table-head">
    <th>Doctor</th>
    <th>Date</th>
    <th>Time</th>
    <th>Message</th>
    <th>Action</th>
  </tr>
  <tr className="appointments-table-data">
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td><button type="button" className="delete-appointment-button">Delete</button></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
      </div>
    </div>
  )
}

export default Appointment
