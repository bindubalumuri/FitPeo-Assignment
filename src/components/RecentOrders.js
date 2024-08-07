import React from 'react';
import { Table } from 'react-bootstrap';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '1547850', amount: '$134.00', status: 'Pending' },
    { customer: 'Jane Cooper', orderNo: '4138956', amount: '$420.00', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '0125846', amount: '$85.00', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '2598742', amount: '$65.00', status: 'Pending' },
    { customer: 'Ronald Fisher', orderNo: '7531598', amount: '$980.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '7916548', amount: '$310.20', status: 'Delivered' },
  ];

  return (
    <div className="card bg-dark text-white mb-4">
      <div className="card-header">Recent Orders</div>
      <div className="card-body">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.customer}</td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td className={`text-${order.status === 'Delivered' ? 'success' : order.status === 'Cancelled' ? 'danger' : 'warning'}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentOrders;
