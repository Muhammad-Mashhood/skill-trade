import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    // Check if email exists
    const emailExists = resetPassword(email);
    if (emailExists) {
      setSuccess('Password reset link sent to your email. Check your inbox.');
      // In a real app, this would send a reset email
      // For demo, we'll redirect after 3 seconds
      setTimeout(() => {
        navigate('/login?reset=success');
      }, 3000);
    } else {
      setError('Email not found. Please check the email or register.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Forgot Password</h2>
                
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div className="form-text">
                      Enter the email address you used to register.
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={success !== ''}
                  >
                    Reset Password
                  </button>
                </form>
                
                <div className="mt-3 text-center">
                  <Link to="/login">Back to Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;