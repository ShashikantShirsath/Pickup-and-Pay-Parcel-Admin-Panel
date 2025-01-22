import React, { useState } from "react";
import "./RefundMgmt.css";
//import "./RefundForm.jsx";

const RefundDashboard = () => {
  const [filter, setFilter] = useState("All");
  const [refundRequests, setRefundRequests] = useState([
    {
      id: 1,
      name: "Riya Sharma",
      reason: "Cancellation",
      paymentMethod: "Online",
      status: "Pending",
    },
    {
      id: 2,
      name: "Payal Kale",
      reason: "Damaged Item",
      paymentMethod: "Cash",
      status: "Pending",
    },
    {
      id: 3,
      name: "karan Mohite",
      reason: "Delayed Delivery",
      paymentMethod: "Online",
      status: "Approved",
    },
  ]);

  const handleStatusUpdate = (id, status) => {
    setRefundRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  const filteredRequests =
    filter === "All"
      ? refundRequests
      : refundRequests.filter((request) => request.paymentMethod === filter);

  return (
    <div className="dashboard-container">
      <h1>Refund Management</h1>
      <div className="filter-container">
        <label htmlFor="paymentFilter">Filter by Payment Method:</label>
        <select
          id="paymentFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>
      </div>
      <div className="form-table">
      <table className="refund-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.reason}</td>
              <td>{request.paymentMethod}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" && (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() => handleStatusUpdate(request.id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleStatusUpdate(request.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
                {request.status !== "Pending" && <span>{request.status}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RefundDashboard;
