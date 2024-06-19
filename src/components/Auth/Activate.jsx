import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Activate = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        await axios.get(`http://localhost:3000/auth/activate/${token}`);
        setMessage('Account activated successfully.');
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    activateAccount();
  }, [token]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='container py-4 register-form'>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activate;
