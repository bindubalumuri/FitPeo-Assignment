import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faTasks, faWallet, faShoppingBag,faTh  } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar d-flex flex-column p-3 bg-dark">
      
     
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon icon={faHome} className="me-2" />
           
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon icon={faChartBar} className="me-2" />
            
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon icon={faTasks} className="me-2" />
          
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon icon={faWallet} className="me-2" />
           
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
           
          </a>
        </li>
      </ul>
      <div className="corner-box top-left"></div>
      <div className="corner-box top-right"></div>
      <div className="corner-box bottom-left"></div>
      <div className="corner-box bottom-right"></div>
    </aside>
  );
};

export default Sidebar;
