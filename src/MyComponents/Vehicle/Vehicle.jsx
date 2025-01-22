import React from "react";
// import 'C:/Users/pshir/Documents/Paarsh Infotech/Work/my-app/src/App.css';

function VehicleTable() {
    return (
        <>  
        <div className="tables-manage">
        <h1 class="table-header">VEHICLE TABLE</h1>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Vehicle</th>
                            <th>Username</th>
                            <th>Vehicle No</th>
                            {/* <th>Employed</th> */}
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
                                MH-18 2345
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
                                MH-18 2345
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
                                MH-18 2345
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
                                MH-18 2345
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
                                MH-18 2345
                            </td>
                            <td>
                                <a class="edit-link">Edit</a><br/>
                                <a class="edit-link">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
};

export default VehicleTable;