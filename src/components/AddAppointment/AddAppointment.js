import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import axios from '../../base/axios';
import { addAppointments } from '../../redux/appointment';
import { hideModal } from '../../redux/appointmentModal';
import './AddAppointment.css';

function AddAppointment() {
  const appointmentModalState = useSelector((state) => state.appointmentModal);
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const doctors = () => { axios.get('doctors').then((res) => { setData(res.data); }); };

  useEffect(() => {
    doctors();
  }, []);

  const dispatch = useDispatch();

  const hidesModal = () => {
    dispatch(hideModal({ type: 'HIDE_MODAL' }));
  };

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
    hidesModal();
  };

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
                {data.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
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
