import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AllUsers from './pages/AllUsers';
import AllLeads from './pages/AllLeads';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/allusers" element={<AllUsers/>}/>
      <Route path="/allleads" element={<AllLeads/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
