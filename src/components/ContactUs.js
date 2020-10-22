import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSent: false
    };
  }

  sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_oxei7ou', 'template_uf73zdb', e.target, 'user_Zk5n4cflQjIsRvVdPpDHX').then(
      this.setState({
        emailSent: true
      })
    );
  };

  render() {
    return (
      <div className="about-us">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12">
              <p className="text-center text-primary">Contact</p>
              <h1 className="text-center">Get in touch</h1>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                contact@karfarm.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                888-849-0645
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Silicon Valley, Seoul, Tokyo
              </p>
            </div>
            <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
              {this.state.emailSent ? (
                <div className="text-center">
                  <h1>Thank You</h1>
                  <h3>We will respond as soon as possible!</h3>
                </div>
              ) : (
                <form onSubmit={this.sendEmail}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="full_name">Full Name*</label>
                      <input type="text" className="form-control" id="full_name" name="full_name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email*</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="johndoe@example.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="company">Company</label>
                      <input type="text" className="form-control" id="company" name="company" placeholder="ACME, Inc." />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input type="text" className="form-control" id="phone_number" name="phone_number" placeholder="4082223333" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea className="form-control" id="message" name="message" rows="3" required />
                  </div>
                  <button type="submit" className="btn btn-primary text-white">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
