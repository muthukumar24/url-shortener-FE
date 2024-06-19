import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://url-shortener-be-pb6m.onrender.com/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      const { firstName, lastName } = response.data;
      setMessage('Login successful');
      // Navigate to dashboard, passing first name and last name as state
      navigate('/dashboard', { state: { firstName, lastName } });
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="container py-3 login-form">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-8 col-xl-8">
                <h3 className='text-center mb-3'>URL Shortening Service</h3>
                <h3 className="text-center">Login <i className="bi bi-person-circle"></i></h3>
                <form onSubmit={handleSubmit}>
                  {message && <div className="alert alert-success">{message}</div>}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="form-group">
                    <label className='mb-2'>Email</label>
                    <input
                      type="email"
                      className="form-control email-input py-2"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className='mt-2 mb-2'>Password</label>
                    <input
                      type="password"
                      className="form-control password-input py-2"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-start">
                    <button
                      type="button"
                      className="btn btn-link p-0 mt-2"
                      onClick={() => navigate('/forgot-password')}
                      style={{ textDecoration: 'none' }}>
                      Forgot Password
                    </button>
                  </div>

                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-primary mt-3" type="submit">
                      Login
                    </button>
                  </div>

                  <div className='mt-3'>
                    <p className='text-center'>Don't have an account? <Link to={'/register'}>Signup</Link></p>
                  </div>

                </form>
                <p className="text-center mt-3">Or</p>
                <p className="text-center">Login With</p>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-outline-success"><i className="bi bi-google"></i></button>
                  <button className="btn btn-outline-success"><i className="bi bi-github"></i></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
