import React, { useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeAppointments, getAppointments } from '../../redux/appointment';

function Appointment(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const myref = useRef();

  const removeAppointment = (id, doctorId) => {
    const removedappointment = {
      token: user.token,
      id,
      doctor_id: doctorId,
    };

<<<<<<< HEAD
    dispatch(removeAppointments(removedappointment, { type: 'REMOVE_APPOINTMENTS' }));
    console.log('reference', myref.current);
  };

=======
    dispatch(removeAppointments(removedAppointment, { type: 'REMOVE_APPOINTMENTS' }));
    const userToken = user.token;
    dispatch(getAppointments(userToken, { type: 'GET_APPOINTMENTS' }));
  };

  const appoints = allAppointments.appointments;

  if (!user.token) {
    window.location = '/login';
  }
  
  const userToken = user.token;
>>>>>>> 80516848c7fa3094a3ede1a9e8d6d346c3f1ea12
  useEffect(() => {
    dispatch(getAppointments(userToken, { type: 'GET_APPOINTMENTS' }));
  });

  const appointment = props;
  const {
    id, doctor_name: doctorName, doctor_id: doctorId, time_of_appointment: timeOfAppointment,
    date_of_appointment: dateOfAppointment, description,
  } = appointment.appointment;
  return (
<<<<<<< HEAD
    <tr className="appointments-table-data" key={id} ref={myref}>
      <td className="appointments-row-data">{doctorName}</td>
      <td className="appointments-row-data">{dateOfAppointment}</td>
      <td className="appointments-row-data">{new Date(timeOfAppointment).toLocaleTimeString('en-US')}</td>
      <td className="appointments-row-data">{description}</td>
      <td className="appointments-row-data data-buttons"><button type="button" className="delete-appointment-button" onClick={() => removeAppointment(id, doctorId)}>Delete</button></td>
    </tr>
=======
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
>>>>>>> 80516848c7fa3094a3ede1a9e8d6d346c3f1ea12
  );
}

Appointment.protoTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  appointment: PropTypes.object.isRequired,
};

export default Appointment;
