import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppointments } from '../../redux/appointment';
import Appointment from './Appointment';
import './Appointment.css';

function Appointments() {
  const dispatch = useDispatch();
  const allAppointments = useSelector((state) => state.appointment);
  const user = useSelector((state) => state.user);

  const userToken = user.token;
  console.log(userToken);

  if (!user.token) {
    window.location = '/login';
  }
  useEffect(() => {
    dispatch(getAppointments(userToken, { type: 'GET_APPOINTMENTS' }));
  });

  const appoints = allAppointments.appointments;

  console.log(appoints, allAppointments);

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
            {appoints && appoints.map((app) => (
              <Appointment appointment={app} key={app.id} />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Appointments;
