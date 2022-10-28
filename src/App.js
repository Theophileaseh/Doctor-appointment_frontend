import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Appointment from './components/Appointment/Appointment';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Nav />
      </Router>
      <Appointment />
    </>
  );
}

export default App;
