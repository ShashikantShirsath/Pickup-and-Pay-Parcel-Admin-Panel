import React from 'react';
import Header from './MyComponents/Header/Header.jsx';
import User from './MyComponents/User-Table/User.jsx';
import Vehicle from './MyComponents/Vehicle/Vehicle.jsx';
import AddUser from './MyComponents/User-Table/addUser.jsx';
import EditUser from './MyComponents/User-Table/editUser.jsx';
import Partner from './MyComponents/Partner/Partner.jsx';
import RefundDashboard from './MyComponents/Payment/RefundMgmt.jsx';
import PickupParcelRefundForm from './MyComponents/Payment/RefundForm.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ flex: 1, padding: '30px 10px' }}>
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path='/vehicle' element={<Vehicle/>}></Route>
            <Route path='/partner' element={<Partner/>}></Route>
            <Route path='/user/addUser' element={<AddUser/>}></Route>
            <Route path='/user/editUser' element={<EditUser/>}></Route>
            <Route path='/payment' element={<RefundDashboard/>}></Route>
            <Route path='/payment/refund/' element={<PickupParcelRefundForm/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
