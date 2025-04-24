import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PulseDemo from './pages/PulseDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pulse-demo" element={<PulseDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
