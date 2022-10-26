import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './App.css';
import { Login } from './components/User_registration/Registration';

function App() {
  return (
    <Router>
      <Routes>
      <Nav />
      <Route path='/Registration' element={<Login />}/>
      <Route path='/Sign_up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
