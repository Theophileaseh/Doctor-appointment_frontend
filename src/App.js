import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
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
