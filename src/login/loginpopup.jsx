import React, { useState } from 'react';

const LoginPopup = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  // const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the username and name
    console.log('Username:', username);
    console.log('Name:', name);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="title">Enter Username and Name</h2>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={onClose} // Close the popup
          ></button>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
