import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../../redux/doctor';

function Doctor(props) {
  const doctor = props;
  const { id, name, picture } = doctor.doctor;
  const dispatch = useDispatch();
  const setDoctors = () => {
    dispatch(getDoctors({ type: 'GET_DOCTORS' }));
  };

  return (
    <Link to={`/doctors/${id}`} key={id} onClick={setDoctors}>
      <div className="single-doctor">
        <img src={picture} alt="doctor" className="doctor-image" />
        <p className="doctor-name">{name}</p>
      </div>
    </Link>
  );
}

Doctor.protoTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  doctor: PropTypes.object.isRequired,
};

export default Doctor;
