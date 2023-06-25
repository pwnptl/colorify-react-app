import React, { useState, useEffect, useRef } from 'react';
import LoginPopup from './loginpopup';

const UserProfile = () => {


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="navbar-item">
      <div className="buttons">
        <button className="button is-primary" onClick={handlePopupClick}>
          Sign In
        </button>
        <LoginPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
      </div>
    </div>
  );
};
export default UserProfile;
