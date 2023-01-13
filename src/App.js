import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PhonesList from './pages/PhonesList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/phones/:id" element={<PhonesList />} />
        <Route path='/details' element={<div>phones details pages</div>} />
      </Routes>
    </div>
  );
}

export default App;
