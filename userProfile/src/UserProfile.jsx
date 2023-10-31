import { useEffect, useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState("");
    const [userID,setUserID] = useState(1);

    useEffect(()=>{
        getUserData()
    },[userID]);

    async function getUserData()
    {
        const results = await fetch(
            `https://dummyjson.com/users/${userID}`
        );

        const json = await results.json();
        setUser(json);
    }


    return (
        <div>
            <div className="container">
                <img className="profile-picture" src={user.image} />
                <h2>{user.firstName} {user.lastName}</h2>
                <p>Email: {user.email}</p>
                <p>Location: {user.address?.city}, {user.address?.state}</p>
            </div>

            <div className="work-details">
                <h2>Work Details</h2>
                <p>Title: {user.company?.title}</p>
                <p>Department: {user.company?.department}</p>
            </div>

            <hr />

            <div className="get-user">
                <input type="text" value={userID} onChange={e => (setUserID(e.target.value))}/>
            </div>
        </div>
    );
};

export default UserProfile;