import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAppointments } from '../../redux/appointment';
import './Appointment.css';
import axios from '../../base/axios';

function Appointment() {
  const [data, setData] = useState([]);
  const allAppointments = () => { axios.get('doctors/patient/appointments').then((res) => { setData(res.data); }); };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    allAppointments();
  }, []);

  const removeAppointment = (app) => {
    const doctorId = app.doctor_id;
    const appId = app.id;
    const removedAppointment = {
      id: appId,
      doctor_id: doctorId,
      token: user.token,
    };

    dispatch(removeAppointments(removedAppointment, { type: 'REMOVE_Appointment' }));
  };
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
            {data.map((app) => (
              <tr className="appointments-table-data" key={app.id}>
                <td className="appointments-row-data">{app.doctor_name}</td>
                <td className="appointments-row-data">{app.date}</td>
                <td className="appointments-row-data">{app.time}</td>
                <td className="appointments-row-data">{app.description}</td>
                <td className="appointments-row-data data-buttons"><button type="button" className="delete-appointment-button" onClick={removeAppointment(app.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Appointment;
