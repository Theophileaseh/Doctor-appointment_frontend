import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppointments, removeAppointments } from '../../redux/appointment';
import './Appointment.css';

function Appointment() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const allAppointments = useSelector((state) => state.appointment);

  const removeAppointment = (app) => {
    const removedAppointment = {
      token: user.token,
      id: app.id,
      doctor_id: app.doctor_id,
    };

    dispatch(removeAppointments(removedAppointment, { type: 'EMOVE_APPOINTMENTS' }));
  };

  const appoints = allAppointments.appointments;

  if (!user.token) {
    window.location = '/login';
  }
  useEffect(() => {
    dispatch(getAppointments({ type: 'GET_APPOINTMENTS' }));
  });

  return (
    <div className="my-appointments-container">
      <div className="my-appointments-head">
        <h2 className="appointments-heading">Your Appointments</h2>
      </div>
      <div className="my-appointments-main">
        <table className="my-appointments-table">
          <thead>
            <tr className="appointments-table-head">
              <th className="appointments-head-data">Doctor</th>
              <th className="appointments-head-data">Date</th>
              <th className="appointments-head-data">Time</th>
              <th className="appointments-head-data">Message</th>
              <th className="appointments-head-data">Action</th>
            </tr>
          </thead>
          <tbody>
            {appoints.map((app) => (
              <tr className="appointments-table-data" key={app.id}>
                <td className="appointments-row-data">{app.doctor_name}</td>
                <td className="appointments-row-data">{app.date_of_appointment}</td>
                <td className="appointments-row-data">{new Date(app.time_of_appointment).toLocaleTimeString('en-US')}</td>
                <td className="appointments-row-data">{app.description}</td>
                <td className="appointments-row-data data-buttons"><button type="button" className="delete-appointment-button" onClick={() => removeAppointment(app)}>Delete</button></td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Appointment;
