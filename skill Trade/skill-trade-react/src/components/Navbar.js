import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
    const { isLoggedIn, logout, currentUser } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Skill Trade
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="search-form d-flex">
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search skills..." 
                            aria-label="Search"
                        />
                        <button className="search-button" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <div className="auth-buttons">
                        {isLoggedIn ? (
                            <>
                                <button onClick={logout} className="btn btn-outline-light">
                                    Logout
                                </button>
                                <div className="profile-btn">
                                    <span>{currentUser?.name?.split(' ')[0] || 'User'}</span>
                                    <div className="profile-image">
                                        <span>{currentUser?.name?.charAt(0).toUpperCase() || 'U'}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-light">Login</Link>
                                <Link to="/register" className="btn btn-primary">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;