// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 text-center">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;