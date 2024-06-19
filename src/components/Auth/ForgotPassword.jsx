import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://url-shortener-be-pb6m.onrender.com/auth/forgot-password', formData);
      setMessage('Password reset link sent to your email.');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='container py-3 forgot-password-form'>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
              <p className='text-center h6 mb-1'>Enter your email address and we'll send you an email with instructions to reset your password.</p>
              <form onSubmit={handleSubmit}>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <input
                type="email"
                className="form-control mt-3 py-2 email-input"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className='d-flex justify-content-center gap-4'>
                <button className="btn btn-primary mt-3" type="submit">
                    Reset Password
                </button>
                <Link to={'/login'}>
                  <button className='btn btn-secondary mt-3'>Login</button>
                </Link>
            </div>
            
          </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
