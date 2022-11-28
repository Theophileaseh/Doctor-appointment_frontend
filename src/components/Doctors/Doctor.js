import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { getDoctors } from '../../redux/doctor';


function Doctor(props) {
  const doctor = props;
  const { id, name, photo, specialty } = doctor.doctor;
  const dispatch = useDispatch();
  const setDoctors = () => {
    dispatch(getDoctors({ type: 'GET_DOCTORS' }));
  };

  return (
    <Link to={`/doctors/${id}`} key={id} onClick={setDoctors}>
      <div className="single-doctor">
        <div className="doctor-image-name">
        <img src={photo} alt="doctor" className="doctor-image" />
        <p className="doctor-name">Dr. {name}</p>
        <p className="doctor-specialty">{specialty}</p>
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
    </Link>
  );
}

Doctor.protoTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  doctor: PropTypes.object.isRequired,
};

export default Doctor;
