import React from "react";
import "./Dashboard.css";
import { Link } from 'react-router-dom';
// import OrdersOverview from "./OrdersOverview";

function Dashboard() {
  return (
    <main className="main-content">
    {/* Header */}
    <header className="header">
      <h1>Dashboard</h1>
      <div className="header-controls">
        <input type="text" placeholder="Search here" />
         <i>👤</i>
        {/* <Link to="/SettingsPanel"> <i>⚙️</i></Link> */}
        <i>⚙️</i>
        <i>🔔</i>
      </div>
    </header>

    {/* Dashboard Cards */}
    <section className="cards">
      <div className="card">
        <div className="card-icon">📂</div>
        <div className="card-info">
          <p>Bookings</p>
          <h3>281</h3>
          <p className="increase">+55% than last week</p>
        </div>
      </div>
      <div className="card">
        <div className="card-icon">📈</div>
        <div className="card-info">
          <p>Today's Users</p>
          <h3>2,300</h3>
          <p className="increase">+3% than last month</p>
        </div>
      </div>
      <div className="card">
        <div className="card-icon">🏬</div>
        <div className="card-info">
          <p>Revenue</p>
          <h3>34k</h3>
          <p className="increase">+1% than yesterday</p>
        </div>
      </div>
    </section>

    {/* Charts Section */}
    <section className="charts">
      <div className="chart card blue">
        <h4>Website Views</h4>
        <p>Last Campaign Performance</p>
        <div className="chart-graph">[Graph]</div>
      </div>
      <div className="chart card green">
        <h4>Daily Sales</h4>
        <p>(+15%) increase in today sales</p>
        <div className="chart-graph">[Graph]</div>
      </div>
      <div className="chart card dark">
        <h4>Completed Tasks</h4>
        <p>Last Campaign Performance</p>
        <div className="chart-graph">[Graph]</div>
      </div>
      
      
    </section>
  </main>


    
    
  );
  

}

export default Dashboard;
