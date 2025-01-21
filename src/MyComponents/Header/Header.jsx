import React from 'react';
import logo from './logo.png';
// import 'C:/Users/pshir/Documents/Paarsh Infotech/Work/my-app/src/App.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="btn_one">
                <label for="check">
                    <div className="header">
                        <ul>
                            <li><i className="fa-solid fa-bars"></i></li>
                            <li style={{ float: "right", marginRight: "10px" }}><a href="#" style={{ fontWeight: "500" }}>Profile</a></li>
                            <a href="#"><li style={{ float: "right" }}><img src={logo} style={{ height: "40px", marginTop: "7px" }} /></li></a>
                        </ul>
                    </div>
                </label>
            </div>

            <div class="main_box">
                <input type="checkbox" id="check" />

                <div className="sidebar_menu">
                    <div className="logo">
                        <a href="#">Admin Panel</a>
                    </div>

                    <div className="btn_two">
                        <label for="check">
                            <i className="fa-solid fa-xmark"></i>
                        </label>
                    </div>

                    <div className="menu">
                        <ul>
                            <a>
                                <li>
                                    <i className="fa-solid fa-image"></i>
                                    Dashboard
                                </li>
                            </a>

                            <Link to="/user">
                                <li>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    Users
                                </li>
                            </Link>
                            <Link to="/partner">
                                <li>
                                    <i className="fa-solid fa-photo-film"></i>
                                    Partner
                                </li>
                            </Link>
                            <Link to="/vehicle">
                                <li>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    Vehicles
                                </li>
                            </Link>
                            <Link to="/parcels">
                                <li>
                                    <i className="fa-solid fa-box"></i> 
                                    Parcels
                                </li>
                            </Link>
                            <a>
                                <li>
                                    <i className="fa-solid fa-store"></i>
                                    Profile
                                </li>
                            </a>
                            <a>
                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    Logout
                                </li>
                            </a>
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
    )
};

export default Header;