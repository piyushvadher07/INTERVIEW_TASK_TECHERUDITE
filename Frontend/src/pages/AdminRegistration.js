import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"; 

const AdminRegistration = () => {
  const [first_name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { 
      first_name, 
      last_name,
      email, 
      password, 
      role: 'admin' 
    };
    console.log('userData', userData)

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      console.log('Registration success:', response.data);
      navigate('/admin-login');
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="form-heading">Admin Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <input 
            type="text" 
            placeholder="First Name" 
            value={first_name} 
            onChange={(e) => setName(e.target.value)} 
            className="input-field" 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            value={last_name} 
            onChange={(e) => setLastName(e.target.value)} 
            className="input-field" 
          />
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
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegistration;
