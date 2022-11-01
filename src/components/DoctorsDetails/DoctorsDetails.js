import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showModal } from '../../redux/appointmentModal';
import axios from '../../base/axios';
import './DoctorsDetails.css';

function DoctorsDetails() {
  const { ids } = useParams();

  const [data, setData] = useState([]);
  const allDoctors = () => { axios.get('doctors').then((res) => { setData(res.data); }); };
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.length === 0) {
      allDoctors();
      console.log('real', data);
    }
  }, [data.length]);
  console.log('doctors', data);

  const myDoctor = data.filter((cc) => (cc.id === 1));
  console.log(myDoctor);
  const doc = myDoctor[0] && myDoctor[0];
  console.log('singDoc', doc);

  const setModal = () => {
    dispatch(showModal({ type: 'SHOW_MODAL' }));
  };

  return (
    <div className="doctors-details-container">
      <div className="doctors-image">
        <img src={myDoctor.picture} alt="doctor" />
      </div>
      <div className="doctors-details">
        <p className="doctors-name">{myDoctor.name}</p>
        <p className="doctors-specialty">{myDoctor.specialization}</p>
        <button type="button" className="doctors-appointment-button" onClick={setModal}>Add Appointment</button>
      </div>

    </div>
  );
}

export default DoctorsDetails;
