import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Appointment.css';

function Appointment() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: user.token,
  };
  const allAppointments = () => { axios.get('patient/appointments, { headers }).then((res) => { setData(res.data); }); };

  useEffect(() => {
    allAppointments();
  }, []);


  const removeAppointment = (app) => {
    const removedAppointment = {
      token: user.token,
      id: app.id,
      doctor_id: app.doctor_id,
    };

    axios.delete(`doctors/${removedAppointment.doctor_id}/appointments/${removedAppointment.id}`, { headers }).then((res) => { setDatas(res.data); }); };

  };

  const appoints = allAppointments.appointments;

  if (!user.token) {
    window.location = '/login';
  }
  
    
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
                <td className="appointments-row-data">{app.date_of_a0ppointment}</td>
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
