import React, { useState } from "react";
import "./Review.css";

function Review() {
  const cards = [
    {
      id: 1,
      title: "Total Reviews",
      value: "10.0k",
      growth: "21% ↑",
      description: "Growth in reviews on this year",
    },
    {
      id: 2,
      title: "Average Rating",
      value: "4.0 ★",
      description: "Average rating on this year",
    },
    {
      id: 3,
      title: "Review Distribution",
      distribution: [
        { stars: "5 ★", value: "2.0k", color: "#4caf50" },
        { stars: "4 ★", value: "1.0k", color: "#2196f3" },
        { stars: "3 ★", value: "500", color: "#ffc107" },
        { stars: "2 ★", value: "200", color: "#ff9800" },
        { stars: "1 ★", value: "0k", color: "#f44336" },
      ],
    },
  ];
  const reviews = [
  
    {
      id: 1,
      name: "Towhidur Rahman",
      totalSpend: "$200",
      totalReviews: 14,
      date: "24-10-2022",
      rating: 4,
      review: "Staff was friendly, but it took longer than expected to get my parcel.",
      address: "123 Main St, Cityville, Country",
    },
    {
      id: 2,
      name: "Towhidur Rahman",
      totalSpend: "$200",
      totalReviews: 14,
      date: "24-10-2022",
      rating: 4,
      review: "The process was smooth, but the location was a bit hard to find.",
      address: "456 Elm St, Townsville, Country",
    },
  ];

  const handleViewAddress = (address) => {
    alert(`Customer Address: ${address}`);
  };

  return (
    <div className="app">
       <h1>Reviews</h1><br></br>
      {/* Header Section */}
      <header className="header">
    
      <div className="cards">
        {/* Card 1: Total Reviews */}
        <div className="card">
          <h3>{cards[0].title}</h3>
          <h1>{cards[0].value}</h1>
          <p className="growth">{cards[0].growth}</p>
          <p className="description">{cards[0].description}</p>
        </div>

        {/* Card 2: Average Rating */}
        <div className="card">
          <h3>{cards[1].title}</h3>
          <h1>{cards[1].value}</h1>
          <p className="description">{cards[1].description}</p>
        </div>

        {/* Card 3: Review Distribution */}
        <div className="card">
          <h3>{cards[2].title}</h3>
          <div className="distribution">
            {cards[2].distribution.map((item, index) => (
              <div key={index} className="distribution-row">
                <span className="stars">{item.stars}</span>
                <div
                  className="bar"
                  style={{
                    backgroundColor: item.color,
                    width: `${parseInt(item.value)}%`,
                  }}
                ></div>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    
      </header>

      {/* Review Cards */}
      <main>
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="user-info">
              <div className="avatar">{review.name[0]}</div>
              <div>
                <h3>{review.name}</h3>
                <p>Total Spend: {review.totalSpend}</p>
                <p>Total Reviews: {review.totalReviews}</p>
              </div>
            </div>
            <div className="review-content">
              <div className="rating">
                {Array(review.rating).fill("★").join("")}
              </div>
              <p className="review-date">{review.date}</p>
              <p className="review-text">{review.review}</p>
              <div className="actions">
                <button onClick={() => handleViewAddress(review.address)}>Public Comment</button>
                <button onClick={() => handleViewAddress(review.address)}>Direct Message</button>
                <button onClick={() => handleViewAddress(review.address)}>
                  View Address
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Review;