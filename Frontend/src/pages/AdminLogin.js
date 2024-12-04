import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"; 

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/auth/admin/login', loginData);
      localStorage.setItem('token', response.data.token);
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Login error:', error.response?.data);
      alert(error.response?.data.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="form-heading">Admin Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-field" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input-field" 
          />
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
