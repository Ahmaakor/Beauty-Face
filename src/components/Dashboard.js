import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    setPurchaseHistory(savedHistory);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="history-table">
        <h3>Purchase History</h3>
        {purchaseHistory.length > 0 ? (
          <table className="history-table-content">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
  {purchaseHistory.map((item, index) => {
    const [date, time] = new Date(item.date).toLocaleString().split(', ');
    return (
      <tr key={index}>
        <td data-label="S/N" >{index + 1}</td>
        <td data-label="Title">{item.title}</td>
        <td data-label="Qty">{item.quantity}</td>
        <td data-label="Price">${item.price.toFixed(2)}</td>
        <td data-label="Total Price">${(item.price * item.quantity).toFixed(2)}</td>
        <td data-label="Date">{date}</td>
        <td data-label="Time">{time}</td>
      </tr>
    );
  })}
</tbody>

          </table>
        ) : (
          <p>No purchase history available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
