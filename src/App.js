import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AddAppointment from './components/AddAppointment/AddAppointment';
import Appointment from './components/Appointment/Appointment';
import './App.css';
import Login from './components/User_registration/Registration';
import SignUp from './components/User_registration/SignUp';
import AddDoctorsForm from './components/AddDoctors/AddDoctorsForm';

function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/Registration" exact element={<Login />} />
            <Route path="/Sign_up" exact element={<SignUp />} />
            <Route path="/Add_Doctors" exact element={<AddDoctorsForm />} />
            <Route path="/appointments" exact element={<Appointment />} />
          </Routes>
        </Router>
      </div>
      <AddAppointment />
    </>
  );
}

export default App;
