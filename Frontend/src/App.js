import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLogin from './pages/CustomerLogin';
import AdminRegistration from './pages/AdminRegistration';
import AdminLogin from './pages/AdminLogin';
import CustomerRegistration from './pages/CustomerRegistration';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/home';
import CustomerDashboard from './pages/CustomerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/customer-registration" element={<CustomerRegistration />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />


      </Routes>
    </Router>
  );
}

export default App;
