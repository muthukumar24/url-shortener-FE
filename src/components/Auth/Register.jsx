import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://url-shortener-be-pb6m.onrender.com/auth/register', formData);
      setMessage('User registered. Please check your email to activate your account.');
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
                <h3 className='text-center'>Signup<i className="bi bi-person-fill-add"></i></h3>
              <form onSubmit={handleSubmit}>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
              <label className='mb-2'>First Name</label>
              <input
                type="text"
                className="form-control fname-input"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className='mt-2 mb-2'>Last Name</label>
              <input
                type="text"
                className="form-control lname-input"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className='mt-2 mb-2'>Email</label>
              <input
                type="email"
                className="form-control email-input"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className='mt-2 mb-2'>Password</label>
              <input
                type="password"
                className="form-control password-input"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div className='d-flex justify-content-center gap-3'>
            <button className="btn btn-primary mt-4" type="submit">
              Signup
            </button>
            </div>
            
            <div className='mt-3'>
              <p className='text-center'>Already have an account? <Link  to={'/login'}>Login</Link></p>
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

export default Register;
