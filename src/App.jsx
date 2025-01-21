import React from 'react';
import Header from './MyComponents/Header/Header.jsx';
import User from './MyComponents/User-Table/User.jsx';
import Vehicle from './MyComponents/Vehicle/Vehicle.jsx';
import Partner from './MyComponents/Partner/Partner.jsx';
import ParcelList from './MyComponents/ParcelManagement/parcelList.jsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ flex: 1, padding: '30px 10px' }}>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/parcels" element={<ParcelList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
