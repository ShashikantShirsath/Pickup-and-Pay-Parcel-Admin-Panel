import React, { useState } from "react";
import "./RefundForm.css";

const PickupParcelRefundForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    parcelId: "",
    transactionId: "",
    pickupDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Refund Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="parcelId">Parcel ID</label>
          <input
            type="text"
            id="parcelId"
            name="parcelId"
            placeholder="Enter Parcel ID"
            value={formData.parcelId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transactionId">Transaction ID</label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            placeholder="Enter Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickupDate">Pickup Date</label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Refund</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          >
            <option value="">Select a reason</option>
            <option value="Damaged Parcel">Damaged Parcel</option>
            <option value="Wrong Item Delivered">Wrong Item Delivered</option>
            <option value="Delayed Delivery">Delayed Delivery</option>
            <option value="Pickup Issue">Pickup Issue</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PickupParcelRefundForm;
