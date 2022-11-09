import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeAppointments, getAppointments } from '../../redux/appointment';

function Appointment(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const removeAppointment = (id, doctorId) => {
    const removedappointment = {
      token: user.token,
      id,
      doctor_id: doctorId,
    };

    dispatch(removeAppointments(removedappointment, { type: 'REMOVE_APPOINTMENTS' }));
    const userToken = user.token;
    dispatch(getAppointments(userToken, { type: 'GET_APPOINTMENTS' }));
  };

  if (!user.token) {
    window.location = '/login';
  }

  const userToken = user.token;
  useEffect(() => {
    dispatch(getAppointments(userToken, { type: 'GET_APPOINTMENTS' }));
  });

  const appointment = props;
  const {
    id, doctor_name: doctorName, doctor_id: doctorId, time_of_appointment: timeOfAppointment,
    date_of_appointment: dateOfAppointment, description,
  } = appointment.appointment;
  return (

    <tr className="appointments-table-data" key={id}>
      <td className="appointments-row-data">{doctorName}</td>
      <td className="appointments-row-data">{dateOfAppointment}</td>
      <td className="appointments-row-data">{new Date(timeOfAppointment).toLocaleTimeString('en-US')}</td>
      <td className="appointments-row-data">{description}</td>
      <td className="appointments-row-data data-buttons"><button type="button" className="delete-appointment-button" onClick={() => removeAppointment(id, doctorId)}>Delete</button></td>
    </tr>
  );
}

Appointment.protoTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  appointment: PropTypes.object.isRequired,
};

export default Appointment;
