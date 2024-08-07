import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faEnvelope, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-3 bg-dark">
      <div className="menu-icon">
        <FontAwesomeIcon icon={faTh} />
      </div>
      <div className="search d-flex flex-grow-1 mx-3">
        <div className="search-wrapper d-flex align-items-center">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </div>
      <div className="side-menu d-flex align-items-center">
        <div className="mail me-3">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="settings me-3">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className="circle me-3">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="profile">
          <img src="profile-pic-url" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
