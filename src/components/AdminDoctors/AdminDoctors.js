import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Doctor from '../Doctors/Doctor';
import { getDoctors } from '../../redux/doctor';
import AdminHeader from '../AdminHeader/AdminHeader';
import '../Doctors/Doctors.css';
import './AdminDoctors.css';
import { Link } from 'react-router-dom';

function AdminDoctors() {
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
        <AdminHeader />
      <div className="all-doctors-section">
        <div className="add-doctor-section">
        <Link to="/add-doctor" className="add-doctor-link">Add Doctor</Link>
        </div>
      <div className="doctors-section">
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default AdminDoctors;
