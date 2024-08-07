import React from 'react';
import { FaBullseye, FaHamburger, FaUtensils, FaChevronRight } from 'react-icons/fa';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-item">
        <div className="menu-icon" style={{ backgroundColor: '#FF5733' }}>
          <FaBullseye className="text-white" />
        </div>
        <span>Goals</span>
        <FaChevronRight className="menu-chevron" />
      </div>
      <div className="menu-item">
        <div className="menu-icon" style={{ backgroundColor: '#33C3FF' }}>
          <FaHamburger className="text-white" />
        </div>
        <span>Popular Dishes</span>
        <FaChevronRight className="menu-chevron" />
      </div>
      <div className="menu-item">
        <div className="menu-icon" style={{ backgroundColor: '#33FF57' }}>
          <FaUtensils className="text-white" />
        </div>
        <span>Menus</span>
        <FaChevronRight className="menu-chevron" />
      </div>
    </div>
  );
};

export default Menu;
