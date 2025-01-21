import React from "react";
import 'C:/Users/pshir/Documents/Paarsh Infotech/Work/my-app/src/App.css';

function UserTable() {
    return (
        <>  <div class="table-header">Users Table</div>
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
                                <a class="edit-link">Edit</a><br/>
                                <a class="edit-link">Delete</a>
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
                                <a class="edit-link">Edit</a><br/>
                                <a class="edit-link">Delete</a>
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
                                <a class="edit-link">Edit</a><br/>
                                <a class="edit-link">Delete</a>
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
                                <a class="edit-link">Edit</a><br/>
                                <a class="edit-link">Delete</a>
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
                                <a class="edit-link">Edit</a><br/>
                                <a class="edit-link">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default UserTable;