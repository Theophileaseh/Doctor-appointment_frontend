import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './App.css';
import { Login } from './components/User_registration/Registration';
import { SignUp } from './components/User_registration/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Nav />
        <Route path="/Registration" exact element={<Login />} />
        <Route path="/Sign_up" exact element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
