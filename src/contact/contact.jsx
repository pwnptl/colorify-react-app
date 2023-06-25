import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="title is-2">Contact Us</h1>
      <div className="columns">
        <div className="column is-half">
          <h2 className="subtitle is-4">Contact Information</h2>
          <div className="box">
            <div className="field">
              <label className="label">Phone</label>
              <div className="control has-icons-left">
                <input className="input" type="tel" placeholder="Phone number" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Email address" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
            </div>
          </div>
          <h2 className="subtitle is-4">Social Media</h2>
          <div className="buttons">
            <a href="https://linkedin.com/" className="button is-linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/" className="button is-github">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com/" className="button is-twitter">
              <FontAwesomeIcon icon={faTwitter} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div className="column is-half">
          <h2 className="subtitle is-4">Location</h2>
          <div className="box">
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
