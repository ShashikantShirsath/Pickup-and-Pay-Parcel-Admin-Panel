import React from "react";

function EditUser () {
    return (
        <>  
            <form>
                <div class="user-form">
                    <h1>Edit User</h1>
                    <hr/>
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required></input>
                    <label for="Email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" id="Email" required readOnly></input>
                    <label for="Address"><b>Address</b></label>
                    <input type="text" placeholder="Enter Address" name="address" id="address" required />
                    <label for="Number"><b>Mobile Number</b></label>
                    <input type="number" placeholder="Enter Mobile Number" name="Number" id="Number" required />    
                    <hr/>
                    <button type="submit" class="add-btn">Update</button>
                </div>
            </form>
        </>
    )
};

export default EditUser;