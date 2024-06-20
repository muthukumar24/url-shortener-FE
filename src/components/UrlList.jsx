import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('https://url-shortener-be-pb6m.onrender.com/urls/urllist');
        // console.log(response.data); // Log the response data to see its structure
        setUrls(response.data.urls || []); // Safeguard against undefined response.data.urls
      } catch (error) {
        console.error('Error fetching URLs:', error);
        setUrls([]); // Set urls to an empty array in case of an error
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="container url-list mt-5 py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-10 col-lg-10 col-xl-10">
          <h2 className='text-center'>URL List</h2>
          <div className='table-responsive'>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Short URL</th>
                <th>Original URL</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url._id}>
                  <td>{url.shortUrl}</td>
                  <td>{url.originalUrl}</td>
                  <td>{url.clickCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          </div>
         <div className='d-flex justify-content-center mt-3'>
           <Link to={'/dashboard'}>
            <button className='btn btn-outline-primary'>Back</button>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UrlList;
