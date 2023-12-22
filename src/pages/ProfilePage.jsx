import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("user");
        if (!token) {
            navigate("/login");
        } else {
            fetch('https://dummyjson.com/auth/user', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data.users[0]);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className='content'>
            <h1>Profile Page</h1>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Gender: {user.gender}</p>
                    <img src={user.image} alt="User Avatar" />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProfilePage;
