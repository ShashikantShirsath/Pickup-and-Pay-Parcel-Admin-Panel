import React from "react";

function AddUser () {
    return (
        <>  
            <form action="/action_page.php">
                <div class="user-form">
                    <h1>Register</h1>
                    <hr/>
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required></input>
                    <label for="Email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" id="Email" required></input>
                    <label for="Address"><b>Address</b></label>
                    <input type="text" placeholder="Enter Address" name="address" id="address" required />
                    <label for="Number"><b>Mobile Number</b></label>
                    <input type="number" placeholder="Enter Mobile Number" name="Number" id="Number" required />    
                    <hr/>
                    <button type="submit" class="add-btn">Register</button>
                </div>
            </form>
        </>
    )
};

export default AddUser;