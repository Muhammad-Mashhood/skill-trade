import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Auth.css';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header />
            <main className="container mt-5">
                <h1>User Profile</h1>
                {user ? (
                    <div>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                ) : (
                    <p>Please log in to view your profile.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;