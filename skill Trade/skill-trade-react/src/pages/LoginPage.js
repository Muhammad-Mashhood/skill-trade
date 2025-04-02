import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('registered') === 'success') {
      alert('Registration successful! Please log in with your credentials.');
    }
    if (params.get('reset') === 'success') {
      setError('Password reset successful! Please log in with your new password.');
    }
    
    if (isLoggedIn) {
      navigate('/');
    }
  }, [location, navigate, isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Log in to continue your skill trading journey!</p>
          
          {error && <div className="auth-error">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary auth-button">Login</button>
          </form>
          
          <p className="auth-footer">
            Forgot your password? <Link to="/forgot-password">Reset it here</Link>
          </p>
          <p className="auth-footer">
            Don't have an account? <Link to="/register">Sign up now</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;