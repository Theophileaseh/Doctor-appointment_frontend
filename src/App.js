
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AddAppointment from './components/AddAppointment/AddAppointment';
import Appointment from './components/Appointment/Appointment';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (

    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/appointments" exact element={<Appointment />} />
          </Routes>
        </Router>
      </div>
      <AddAppointment />
    </>

    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
