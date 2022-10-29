import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../../redux/doctor';
import { hideModal } from '../../redux/appointmentModal';
import { addAppointments } from '../../redux/appointment';
import { AiOutlineClose } from 'react-icons/ai';
import './Appointment.css';

const Appointment = () => {
  const appointmentModalState = useSelector((state) => state.appointmentModal);

  const doctors = useSelector((state) => state.doctor);
  console.log("doctors", doctors)

  useEffect(() => {
      dispatch(getDoctors());
  }, []);

  const dispatch = useDispatch();


  const hidesModal = () => {

        dispatch(hideModal({type: 'HIDE_MODAL'}));
  }

  const addsAppointments = {
    token, user_id, doctor_id,
    date_of_appointment: date,
    time_of_appointment: time,
    description: description
  }

  dispatch(addAppointments({type: 'ADD_APPOINTMENTS', addsAppointments}));

  return (

   appointmentModalState.show === true ? (

  <div className="add-appointment-modal">
    <div className="appointment-head">
      <button type="button" className="close-modal-button" onClick={hidesModal}>
        <AiOutlineClose className="modal-close-icon" />
      </button>
    </div>
    <div className="appointment-info">
      <p>
        Hello @user, welcome to Doctora App appointment page.
        Here you can make private appointments with any Doctor of your
        choice for a specified date and location.
        Select a doctor, city and date to create your appointment. Enjoy!
      </p>
    </div>
    <div className="add-appointment-section">
      <form className="add-appointment-form" onSubmit={addsAppointments}>
        <div className="doctors-date-time">

        <select className="select-doctors" required>
          {doctors.map((doctor) => (
            <option>{doctor}</option>
          ))}
        </select>
        <input type="date" name="date" className="date-input" required/>
        <input type="time" name="time" className="date-input" required />
        
                  
        </div>
        <div className="description-submit">
        <textarea name="description" className="city-input" placeholder="Type message..." required />
        <button type="submit" className="submit-appointment">Add Appointment</button>
        </div>
      </form>
    </div>
  </div> ) : ''
)};

export default Appointment;
