import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { showModal } from '../../redux/appointmentModal';
import './DoctorsDetails.css';
import { setDoctor } from '../../redux/setDoctor';

function DoctorsDetails() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const allDoctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const ids = parseInt(id, 10);

  const myDoctor = allDoctors && allDoctors.filter((cc) => (cc.id === ids));
  const {
    name, photo, specialty, bio,
  } = myDoctor[0];
  const singleDoctor = myDoctor[0];
  const setModalDoctor = () => {
    dispatch(showModal({ type: 'SHOW_MODAL' }));
    dispatch(setDoctor(singleDoctor, { type: 'SET_DOCTOR' }));
  };

  if (!user.token) {
    window.location = '/login';
  }

  return (
    <div className="doctors-details-container">
      <div className="doctors-image">
        <img src={photo} alt="doctor" className="doctors-main-image" />
      </div>
      <div className="doctors-details">
        <div className="doctor-main-details">
          <p className="doctors-name">
            Dr.
            {name}
          </p>
          <p className="doctors-specialty">
            {specialty}
          </p>
          <p className="doctors-desc">
            {bio}
          </p>
          {user.role === 'admin' ? ''
            : <button type="button" className="doctors-appointment-button" onClick={setModalDoctor}>Add Appointment</button>}
        </div>
        <div className="social-icons">
          <Link to="facebook.com">
            <FaFacebookF className="social-icon" />
          </Link>
          <Link to="twitter.com">
            <FaTwitter className="social-icon" />
          </Link>
          <Link to="linkedin.com">
            <FaLinkedinIn className="social-icon" />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default DoctorsDetails;
