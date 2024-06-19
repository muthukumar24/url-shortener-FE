import React from 'react';
import CreateShortUrl from '../components/CreateShortUrl';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className="container py-5 mb-5 dash-board-container">
        <h3 className="text-center mt-4">Welcome to URL Shortening Service</h3>
        <div className="d-flex justify-content-center gap-5 mt-4">
          <Link to={'/url-stats'}>
            <button className='btn btn-outline-success'>URL Stats</button>
          </Link>
          <Link to={'/url-list'}>
            <button className='btn btn-outline-primary'>URL List</button>
          </Link>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>

        {/* Create URL */}
      <CreateShortUrl />
      
      </div>
    </>
  );
};

export default Dashboard;
