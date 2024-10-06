import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import StartGame from './components/StartGame';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start" element={<StartGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
