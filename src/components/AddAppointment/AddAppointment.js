import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { addAppointments } from '../../redux/appointment';
import { hideModal } from '../../redux/appointmentModal';
import { setDoctor } from '../../redux/setDoctor';
import './AddAppointment.css';

function AddAppointment() {
  const appointmentModalState = useSelector((state) => state.appointmentModal);
  const user = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctor);
  const selectedDoctor = useSelector((state) => state.setDoctor);
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const singleDoctor = {};

  const hidesModal = () => {
    dispatch(hideModal({ type: 'HIDE_MODAL' }));
    dispatch(setDoctor(singleDoctor, { type: 'SET_DOCTOR' }));
  };

  console.log(selectedDoctor, 'select');

  const newAppointment = (e) => {
    e.preventDefault();

    const doctorId = e.target[0].value;

    const addsAppointments = {
      token: user.token,
      user_id: user.id,
      doctor_id: doctorId,
      day_of_appointment: e.target[1].value,
      time_of_appointment: e.target[2].value,
      message: e.target[3].value,
    };

    dispatch(addAppointments(addsAppointments, { type: 'ADD_APPOINTMENTS' }));
    dispatch(setDoctor(singleDoctor, { type: 'SET_DOCTOR' }));
    hidesModal();
    // navigate('/appointments');
  };

  console.log('selectedDoc', selectedDoctor);
  console.log('data', doctors);

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
            Hello &nbsp;
            <span>
              {user.username}
            </span>
            , welcome to Doctora App appointment page.
            Here you can make private appointments with any Doctor of your
            choice for a specified date and location.
            Select a doctor, city and date to create your appointment. Enjoy!
          </p>
        </div>
        <div className="add-appointment-section">
          <form className="add-appointment-form" onSubmit={newAppointment}>
            <div className="doctors-date-time">

              <select className="select-doctors" required name="doctor" placeholder="Select">
                { selectedDoctor.id ? (
                  <option key={selectedDoctor.id} value={selectedDoctor.id} selected>
                    Dr.
                    {' '}
                    {selectedDoctor.name}
                  </option>
                ) : '' }
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    Dr.
                    {' '}
                    {doctor.name}
                  </option>
                ))}
              </select>
              <input type="date" name="date" className="date-input" required />
              <input type="time" name="time" className="date-input" required />

            </div>
            <div className="description-submit">
              <textarea name="description" className="city-input" placeholder="Type message..." required />
              <button type="submit" className="submit-appointment">Add Appointment</button>
            </div>
          </form>
        </div>
      </div>
    ) : ''
  );
}

export default AddAppointment;
