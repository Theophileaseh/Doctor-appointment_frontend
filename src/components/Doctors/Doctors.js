import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../base/axios';
import Doctor from './Doctor';
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
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
