import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import Chart from './Chart';
import Menu from './Menu';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <div className="main-content-container">
          <MainContent />
          <div className="chart-menu-container">
            <div className="chart-section">
              <Chart />
            </div>
            <div className="menu-section">
              <Menu />
            </div>
          </div>
          <div className="recent-feedback-container">
            <div className="recent-orders-section">
              <RecentOrders />
            </div>
            <div className="customer-feedback-section">
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
