import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showModal } from '../../redux/appointmentModal';
import './DoctorsDetails.css';

const DoctorsDetails = () => {

  const { ids } = useParams();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const allDoctors = () => { axios.get('doctors').then((res) => { setData(res.data); }); };

  useEffect(() => {
    allDoctors();
  }, []);

  const myDoctor = data.filter((single) => (single.id === ids));

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
  )
}

export default DoctorsDetails;
