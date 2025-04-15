import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Simulate password reset email being sent
    // In a real application, you would call an API endpoint here
    setTimeout(() => {
      setIsSubmitted(true);
      setSuccessMessage('Password reset instructions have been sent to your email.');
    }, 1500);
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container show-login">
          {/* Left panel - Password Reset form */}
          <div className="auth-panel left">
            <div className="form-container active">
              <h2 className="auth-title">Reset Password</h2>
              <p className="auth-subtitle">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
              
              {error && <div className="error-message">{error}</div>}
              {successMessage && <div className="success-message">{successMessage}</div>}
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                    </svg>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="btn">
                    <button type="submit" className="button1">Send Reset Instructions</button>
                  </div>
                </form>
              ) : (
                <div className="btn" style={{ marginTop: "30px" }}>
                  <button onClick={goToLogin} className="button1">Back to Login</button>
                </div>
              )}
              
              <div className="forgot-password" style={{ textAlign: "center", marginTop: "20px" }}>
                <Link to="/login">Remember your password? Log in</Link>
              </div>
            </div>
          </div>
          
          {/* Right panel - Remember password CTA */}
          <div className="auth-panel right">
            <h2 className="panel-title">Remember your password?</h2>
            <p className="panel-subtitle">Log in to your account and continue your journey!</p>
            <button onClick={goToLogin} className="button2">Sign In</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;