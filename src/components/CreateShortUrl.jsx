import React, { useState } from 'react';
import axios from 'axios';

const CreateShortUrl = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://url-shortener-be-pb6m.onrender.com/urls/shorten', { originalUrl: url } );
      setShortUrl(`https://url-shortener-be-pb6m.onrender.com/urls/${response.data.shortUrl}`);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setShortUrl('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='container py-4 short-url-form'>
            <div className='row justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                <form onSubmit={handleSubmit}>
                  
                  <div className="form-group">
                    <label className='mb-2'>Enter URL</label>
                    <input
                      type="url"
                      className="form-control short-url-input"
                      placeholder="Enter URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className="btn btn-outline-primary mt-4" type="submit">
                      Create Short URL
                    </button>
                  </div>

                  <div className='mt-3'>
                  {shortUrl && (
                    <div className="alert alert-success">
                      Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                    </div>
                  )}
                  {error && <div className="alert alert-danger">{error}</div>}
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

export default CreateShortUrl;
