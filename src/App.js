import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
