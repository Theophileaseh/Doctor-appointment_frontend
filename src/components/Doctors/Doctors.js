import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../base/axios';
import './Doctors.css';

function Doctors() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const allDoctors = () => { axios.get('doctors').then((res) => { setData(res.data); }); };

  useEffect(() => {
    allDoctors();
  }, []);

  if (!user.token) {
    window.location = '/login';
  }
  return (
    <div className="doctors-container">
      <div className="doctors-section">
        {data.map((doctor) => (
          <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
            <div className="single-doctor">
              <img src={doctor.picture} alt="doctor" className="doctor-image" />
              <p className="doctor-name">{doctor.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
