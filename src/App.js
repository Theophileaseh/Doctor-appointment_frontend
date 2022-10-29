import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AddAppointment from './components/AddAppointment/AddAppointment';
import Appointment from './components/Appointment/Appointment';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/appointments" exact element={<Appointment />} />
        </Routes>
        <Appointment />
      </Router>
      <AddAppointment />
    </>
  );
}

export default App;
