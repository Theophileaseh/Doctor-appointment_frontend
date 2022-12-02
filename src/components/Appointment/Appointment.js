import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeAppointments } from '../../redux/appointment';

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
  };

  if (!user.token) {
    window.location = '/login';
  }

  const appointment = props;
  const {
    id, doctor_photo: doctorPhoto, doctor_name: doctorName, doctor_id: doctorId,
    time_of_appointment: timeOfAppointment,
    day_of_appointment: dayOfAppointment, message,
  } = appointment.appointment;
  return (

    <tr className="appointments-table-data" key={id}>
      <td className="appointments-row-data"><img src={doctorPhoto} alt={doctorName} className="appointment-doctor-image" /></td>
      <td className="appointments-row-data">{doctorName}</td>
      <td className="appointments-row-data">{dayOfAppointment}</td>
      <td className="appointments-row-data">{new Date(timeOfAppointment).toLocaleTimeString('en-US')}</td>
      <td className="appointments-row-data">{message}</td>
      <td className="appointments-row-data data-buttons"><button type="button" className="delete-appointment-button" onClick={() => removeAppointment(id, doctorId)}>Delete</button></td>
    </tr>
  );
}

Appointment.protoTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  appointment: PropTypes.object.isRequired,
};

export default Appointment;
