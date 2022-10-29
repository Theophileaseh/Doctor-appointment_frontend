import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../redux/appointmentModal';
import { AiOutlineClose } from 'react-icons/ai';
import './Appointment.css';

const Appointment = () => {
  const appointmentModalState = useSelector((state) => state.appointmentModal);
  console.log("modal state", appointmentModalState.show);

  const dispatch = useDispatch();


  const hidesModal = () => {

        dispatch(hideModal({type: 'HIDE_MODAL'}));
  }

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
      <form className="add-appointment-form">
        <select className="select-doctors">
          <option>Doctor</option>
        </select>
        <input type="text" name="city" className="city-input" placeholder="Type Your city..." />
        <input type="date" name="date" className="date-input" />
        <button type="submit" className="submit-appointment">Add Appointment</button>
      </form>
    </div>
  </div> ) : ''
)};

export default Appointment;
