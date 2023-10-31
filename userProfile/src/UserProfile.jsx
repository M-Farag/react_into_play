import { useState } from "react";

const UserProfile = () => {

    const [user,setUser ] = useState("");


    return (
        <div>
            <div className="container">
                <div className="profile-picture"></div>
                <h2>User Name</h2>
                <p>Email: {user.email}</p>
                <p>Location: {user.city}, {user.country}</p>
        </div>

        <div className="work-details">
            <h2>Work Details</h2>
            <p>Position: Full Stack Software Engineer</p>
            <p>Skills: CPP, Python, PHP, JavaScript, React, MySQL, Web Development, Data Processing</p>
        </div>

            <div className="other-data">
                <h2>Other Data</h2>
                <p>Learning: Rust</p>
            
            </div>
        </div>
    );
}

export default UserProfile;