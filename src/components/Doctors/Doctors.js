import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Doctor from './Doctor';
import { getDoctors } from '../../redux/doctor';
import './Doctors.css';

function Doctors() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctor);
  useEffect(() => {
    dispatch(getDoctors({ type: 'GET_DOCTORS' }));
  }, []);

  if (!user.token) {
    window.location = '/login';
  }
  

  return (
    <div className="doctors-container">
      <div className="doctors-section">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
