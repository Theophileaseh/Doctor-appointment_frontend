import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AddAppointment from './components/AddAppointment/AddAppointment';
import Appointment from './components/Appointment/Appointment';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddDoctor from './components/AddDoctor/AddDoctor';
import DoctorsDetails from './components/DoctorsDetails/DoctorsDetails';
import Doctors from './components/Doctors/Doctors';
import './App.css';

function App() {
  return (

    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/appointments" exact element={<Appointment />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/add-doctor" exact element={<AddDoctor />} />
            <Route path="/doctors" exact element={<Doctors />} />
            <Route path="/doctors/:id" exact element={<DoctorsDetails />} />

          </Routes>
        </Router>
      </div>
      <AddAppointment />
    </>

  );
}

export default App;
