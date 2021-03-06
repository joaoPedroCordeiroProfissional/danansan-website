import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './styles';

export default function BackgroundServices() {
  return (
    <Styles>
      <div className="background-banner mb-5">
        <div className="overlay"></div>

        <div className="container">
          <div className=" banner-content">
            <h1>
              <strong>Garden Storage Shed Installation Service</strong>
            </h1>
            <p>
              If you're not a DIY expert then why not let our professional
              installation <br /> team build it for you leaving you with more
              time to spare for other activities.
            </p>

            <Link className="button-style btn p-2 mt-5" to="/get-a-quote">
              Get a free quote
            </Link>
          </div>
        </div>
      </div>
    </Styles>
  );
}
