import React, { useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
    // State to track the active button
    const [activeIndex, setActiveIndex] = useState(0);

    const handleButtonClick = (index) => {
        setActiveIndex(index); // Update the active button index
    };

    return (
        <>
            <div className="btn_one">
                <label htmlFor="check">
                    <div className="header">
                        <ul>
                            <li><i className="fa-solid fa-bars"></i></li>
                            <li style={{ float: "right", marginRight: "10px" }}>
                                <a href="#" style={{ fontWeight: "500" }}>Profile</a>
                            </li>
                            <a href="#">
                                <li style={{ float: "right" }}>
                                    <img src={logo} style={{ height: "40px", marginTop: "7px" }} alt="Logo" />
                                </li>
                            </a>
                        </ul>
                    </div>
                </label>
            </div>

            <div className="main_box">
                <input type="checkbox" id="check" />

                <div className="sidebar_menu">
                    <div className="logo">
                        <a href="#">Admin Panel</a>
                    </div>

                    <div className="btn_two">
                        <label htmlFor="check">
                            <i className="fa-solid fa-xmark"></i>
                        </label>
                    </div>

                    <div className="menu">
                        <ul className="myDiv">
                            <Link to="/dashboard" onClick={() => handleButtonClick(0)}>
                                <li className={`side-btn ${activeIndex === 0 ? "active" : ""}`}>
                                    <i className="fa-solid fa-chart-line"></i>
                                    Dashboard
                                </li>
                            </Link>

                            <Link to="/user" onClick={() => handleButtonClick(1)}>
                                <li className={`side-btn ${activeIndex === 1 ? "active" : ""}`}>
                                    <i className="fa-solid fa-user-group"></i>
                                    Users
                                </li>
                            </Link>

                            <Link to="/partner" onClick={() => handleButtonClick(2)}>
                                <li className={`side-btn ${activeIndex === 2 ? "active" : ""}`}>
                                    <i className="fa-regular fa-handshake"></i>
                                    Partner
                                </li>
                            </Link>

                            <Link to="/vehicle" onClick={() => handleButtonClick(3)}>
                                <li className={`side-btn ${activeIndex === 3 ? "active" : ""}`}>
                                    <i className="fa-solid fa-car"></i>
                                    Vehicles
                                </li>
                            </Link>

                            <Link to="/parcels" onClick={() => handleButtonClick(4)}>
                                <li className={`side-btn ${activeIndex === 4 ? "active" : ""}`}>
                                    <i className="fa-solid fa-box"></i> 
                                    Parcels
                                </li>
                            </Link>

                            {/* <Link onClick={() => handleButtonClick(5)}>
                                <li className={`side-btn ${activeIndex === 5 ? "active" : ""}`}>
                                    <i className="fa-solid fa-user-large"></i>
                                    Profile
                                </li>
                            </Link> */}

                            <Link to="/payment" onClick={() => handleButtonClick(6)}>
                                <li className={`side-btn ${activeIndex === 6 ? "active" : ""}`}>
                                <i class="fa-solid fa-sync"></i>
                                    Refaund
                                </li>
                            </Link>

                            <Link onClick={() => handleButtonClick(7)}>
                                <li className={`side-btn ${activeIndex === 7 ? "active" : ""}`}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    Logout
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="social_media">
                        <ul>
                            <a><i className="fa-brands fa-facebook"></i></a>
                            <a><i className="fa-brands fa-twitter"></i></a>
                            <a><i className="fa-brands fa-instagram"></i></a>
                            <a><i className="fa-brands fa-youtube"></i></a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
