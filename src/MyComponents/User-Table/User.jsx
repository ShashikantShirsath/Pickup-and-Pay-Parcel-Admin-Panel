import React from "react";
import { Link } from "react-router-dom";
// import 'C:/Users/pshir/Documents/Paarsh Infotech/Work/my-app/src/App.css';

function UserTable() {
    return (
        <>
            <div class="add-user">
                <Link to={"/user/addUser"}>
                    <button class="add-btn" style={{ width: "130px" }}>Add User</button>
                </Link>
            </div>
            <div className="tables-manage">
            <h1 class="table-header">USER TABLE</h1>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>mail-id</th>
                            {/* <th>Status</th> */}
                            <th>Registered</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {/* <img src="https://via.placeholder.com/40" alt="Profile" style={{borderRadius: "50%", marginRight: "10px", verticalAlign: "middle"}} /> */}
                                John Michael <br />
                                <small>john@creative-tim.com</small>
                            </td>
                            <td>
                                Manager<br />
                                <small>Organization</small>
                            </td>
                            {/* <td>
                                <span class="status-online">Online</span>
                            </td> */}
                            <td>
                                23/04/18
                            </td>
                            <td>
                                <div class="dropdown">
                                    <button class="dropbtn">action</button>
                                    <div class="dropdown-content">
                                        <a href="#">view</a>
                                        <a href="#">edit</a>
                                        <a href="#">delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <img src="https://via.placeholder.com/40" alt="Profile" style={{borderRadius: "50%", marginRight: "10px", verticalAlign: "middle"}} /> */}
                                Alexa Liras <br />
                                <small>alexa@creative-tim.com</small>
                            </td>
                            <td>
                                Programator<br />
                                <small>Developer</small>
                            </td>
                            {/* <td>
                                <span class="status-offline">Offline</span>
                            </td> */}
                            <td>
                                11/01/19
                            </td>
                            <td>
                            <div class="dropdown">
                                    <button class="dropbtn">action</button>
                                    <div class="dropdown-content">
                                        <a href="#">view</a>
                                        <a href="#">edit</a>
                                        <a href="#">delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <img src="https://via.placeholder.com/40" alt="Profile" style={{borderRadius: "50%", marginRight: "10px", verticalAlign: "middle"}} /> */}
                                Laurent Perrier <br />
                                <small>laurent@creative-tim.com</small>
                            </td>
                            <td>
                                Executive<br />
                                <small>Projects</small>
                            </td>
                            {/* <td>
                                <span class="status-online">Online</span>
                            </td> */}
                            <td>
                                19/09/17
                            </td>
                            <td>
                            <div class="dropdown">
                                    <button class="dropbtn">action</button>
                                    <div class="dropdown-content">
                                        <a href="#">view</a>
                                        <a href="#">edit</a>
                                        <a href="#">delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <img src="https://via.placeholder.com/40" alt="Profile" style={{borderRadius: "50%", marginRight: "10px", verticalAlign: "middle"}} /> */}
                                Michael Levi <br />
                                <small>michael@creative-tim.com</small>
                            </td>
                            <td>
                                Programator<br />
                                <small>Developer</small>
                            </td>
                            {/* <td>
                                <span class="status-online">Online</span>
                            </td> */}
                            <td>
                                24/12/08
                            </td>
                            <td>
                            <div class="dropdown">
                                    <button class="dropbtn">action</button>
                                    <div class="dropdown-content">
                                        <a href="#">view</a>
                                        <a href="#">edit</a>
                                        <a href="#">delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {/* <img src="https://via.placeholder.com/40" alt="Profile" style={{borderRadius: "50%", marginRight: "10px", verticalAlign: "middle"}} /> */}
                                Richard Gran <br />
                                <small>richard@creative-tim.com</small>
                            </td>
                            <td>
                                Manager<br />
                                <small>Executive</small>
                            </td>
                            {/* <td>
                                <span class="status-offline">Offline</span>
                            </td> */}
                            <td>
                                04/10/21
                            </td>
                            <td>
                            <div class="dropdown">
                                    <button class="dropbtn">action</button>
                                    <div class="dropdown-content">
                                        <a href="#">view</a>
                                        <a href="#">edit</a>
                                        <a href="#">delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
};

export default UserTable;