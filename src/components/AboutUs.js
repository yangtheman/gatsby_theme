import React from 'react';

const AboutUs = props => {
  const intro = props.intro;

  return (
    <div className="about-us">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-md-5 col-lg-5 order-2 order-md-1">
            <p className="text-primary">About Us</p>
            <h1>Our Vision & Philosophy</h1>
            <p>
              With a combined experience of 30 years in dealership and OEM environments, KarFarm aims to enhance the sales and service staff in already existing
              dealership showrooms. Our AI assistant automates the customer engagement processes, which frees up the staff to do what they do best - customer
              service!
            </p>
            <p>
              The future of automotive retail depends on being able to deliver the best human experiences to the car shoppers. Through our AI platform, the
              human staff can deliver more human experiences to your customers.
            </p>
          </div>
          <div className="col-12 col-md-7 col-lg-7 order-1 order-md-2 position-relative">
            <img alt="about-us" src="../../images/about-us/about_us.svg" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
