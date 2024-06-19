import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({ password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://url-shortener-be-pb6m.onrender.com/auth/reset-password/${token}`, formData);
      setMessage('Password reset successfully.');
      setTimeout(() => {
        window.close();
      }, 3000)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='container py-4 register-form'>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
              <form onSubmit={handleSubmit}>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label className='mb-2'>New Password</label>
              <input
                type="password"
                className="form-control py-2 reset-password-input"
                placeholder="Enter new password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div className='d-flex justify-content-center'>
                <button className="btn btn-primary mt-3" type="submit">
                    Reset Password
                </button>
                
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

export default ResetPassword;
