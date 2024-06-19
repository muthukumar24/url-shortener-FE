import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActivateAccount = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const [hasActivated, setHasActivated] = useState(false);

  useEffect(() => {
    const activateAccount = async () => {
      if (hasActivated) return; // Prevent duplicate requests

      try {
        setHasActivated(true); // Set the flag to prevent duplicate requests
        console.log('Sending activation request');
        const response = await axios.get(`https://url-shortener-be-pb6m.onrender.com/auth/activate/${token}`);
        setMessage(response.data.message);
        console.log('Activation response received');
      } catch (err) {
        setMessage(err.response.data.message);
        console.log('Activation error received');
      }
    };

    activateAccount();
  }, [token, hasActivated]);

  return (
    <div className="container activation-msg py-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='container py-3'>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                <h3 className='text-center'>{message}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
