import React from 'react';
import './MainContent.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTruck, FaTimesCircle, FaDollarSign } from 'react-icons/fa';
import shoppingBag from './assets/ShoppingBag.png'; // Adjust the path as necessary
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from './Chart.js';

const MainContent = () => {
  const stats = [
    { label: 'Total Orders', value: 75, icon: <img src={shoppingBag} alt="Shopping Cart" className="image-icon" />, change: '3%', changeType: 'up' },
    { label: 'Total Delivered', value: 70, icon: <FaTruck size={30} />, change: '3%', changeType: 'down' },
    { label: 'Total Cancelled', value: 5, icon: <FaTimesCircle size={30} />, change: '3%', changeType: 'up' },
    { label: 'Total Revenue', value: '$12k', icon: <FaDollarSign size={30} />, change: '3%', changeType: 'down' },
    { 
      label: 'Net Profit', 
      value: '$6759.25', 
      change: '3%', 
      changeType: 'up',
      progress: 70, // Adding progress for the circular indicator
    },
  ];

  return (
    <Container fluid className="mt-4">
      <Row className='dashboard'>
        <h2>Dashboard</h2>
      </Row>
      <Row>
        {stats.map((stat, index) => (
          <Col key={index} xs={12} sm={6} md={stat.label === 'Net Profit' ? 4 : 2} className="mb-4">
            <Card className="text-center text-white bg-dark">
              <Card.Body className={stat.label === 'Net Profit' ? 'd-flex justify-content-between align-items-center net-profit-body' : ''}>
                <div className="icon-container">{stat.icon}</div>
                <div className={stat.label === 'Net Profit' ? 'text-left net-profit-text' : 'mb-2'}>
                  <Card.Title className='label'>{stat.label}</Card.Title>
                  <Card.Text className="value display-4 mb-0">{stat.value}</Card.Text>
                  <Card.Text className={` change-text text-${stat.changeType === 'up' ? 'success' : 'danger'} mb-0 ${stat.label !== 'Net Profit' ? 'change-type-right' : ''}`}>
                    {stat.changeType === 'up' ? '▲' : '▼'} {stat.change}
                  </Card.Text>
                </div>
                {stat.label === 'Net Profit' && (
                  <div className="progress-container">
                    <div style={{ width: 100, height: 100 }}>
                      <CircularProgressbarWithChildren 
                        value={stat.progress} 
                        styles={buildStyles({
                          pathColor: `rgba(62, 152, 199, ${stat.progress / 100})`,
                          textColor: '#f88',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                        })}
                      >
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                          <strong>{`${stat.progress}%`}</strong>
                          <div style={{ fontSize: 8 }}>Goal Completed</div>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                )}
              </Card.Body>
              {stat.label === 'Net Profit' && (
               <p className="progress-text">*The values here have been rounded off.</p>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainContent;
