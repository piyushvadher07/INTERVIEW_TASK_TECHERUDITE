import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content">
        <h2 className="heading">MERN TASK TECHERUDITE</h2>
        <div className="button-container">
          <button 
            className="styled-button" 
            onClick={() => navigate('/admin-registration')}
          >
            Admin Registration
          </button>
          <button 
            className="styled-button" 
            onClick={() => navigate('/customer-registration')}
          >
            Customer Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
