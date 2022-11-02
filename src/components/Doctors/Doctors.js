<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../base/axios';
import './Doctors.css';

const Doctors = () => {

  const [data, setData] = useState([]);
  const allDoctors = () => { axios.get('doctors').then((res) => { setData(res.data); }); };

  useEffect(() => {
    allDoctors();
  }, []);

  return (
    <div className="doctors-container">
      <div className="doctors-section">
        {data.map((doctor) => (
        <Link to={`/doctors/${doctor.id}`} >
        <div className="single-doctor">
          <img src={doctor.picture} alt="doctor" className="doctor-image" />
          <p className="doctor-name">{doctor.name}</p>
        </div>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Doctors;
=======
import React from 'react';
import './Doctors.css';

const Doctors = () => {
  return (
    <div>
      
    </div>
  )
}

export default Doctors;
>>>>>>> 939347290aa81232e7d0186fa8fd0f139494b506
