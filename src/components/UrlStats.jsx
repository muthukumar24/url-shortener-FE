import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UrlStats = () => {
  const [stats, setStats] = useState({ daily: 0, monthly: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('https://url-shortener-be-pb6m.onrender.com/urls/stats'); // Updated endpoint
        setStats(response.data);
      } catch (err) {
        setError('Failed to fetch URL stats');
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container url-stats mt-4 py-5">
      <h4 className="text-center mb-4">URL Statistics</h4>
      <div className="row text-center d-flex justify-content-center">
        <div className="col-sm-11 col-md-5 col-lg-5 col-xl-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Daily URLs Created</h5>
              <p className="card-text">{stats.daily}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-11 col-md-5 col-lg-5 col-xl-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Monthly URLs Created</h5>
              <p className="card-text">{stats.monthly}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>

      <div className='d-flex justify-content-center'>
        <Link to={'/dashboard'}>
          <button className='btn btn-outline-primary mt-3'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default UrlStats;
