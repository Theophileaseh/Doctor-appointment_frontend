import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showModal } from '../../redux/appointmentModal';
import './DoctorsDetails.css';

function DoctorsDetails() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const allDoctors = () => { axios.get('doctors').then((res) => { setData(res.data); }); };

  useEffect(() => {
    allDoctors();
  }, []);

  const dispatch = useDispatch();
  const ids = parseInt(id, 10);

  const myDoctor = data.filter((cc) => (cc.id === ids));
  const {
    name, picture, specialization, gender,
  } = myDoctor[0];

  const setModal = () => {
    dispatch(showModal({ type: 'SHOW_MODAL' }));
  };

  if (!user.token) {
    window.location = '/login';
  }

  return (
    <div className="doctors-details-container">
      <div className="doctors-image">
        <img src={picture} alt="doctor" className="doctors-main-image" />
      </div>
      <div className="doctors-details">
        <p className="doctors-name">{name}</p>
        <p className="doctors-specialty">
          Specialty:
          <span>{specialization}</span>
        </p>
        <p className="doctors-specialty">
          Gender:
          <span>{gender}</span>
        </p>
        <button type="button" className="doctors-appointment-button" onClick={setModal}>Add Appointment</button>
      </div>

    </div>
  );
}

export default DoctorsDetails;
