import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedIsLoggedIn = localStorage.getItem('is_logged_in') === 'true';
    setIsLoggedIn(storedIsLoggedIn);
    
    if (storedIsLoggedIn) {
      setCurrentUser({
        name: localStorage.getItem('user_name'),
        email: localStorage.getItem('user_email')
      });
    }
    
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // Check if email exists in localStorage
    const storedEmail = localStorage.getItem('user_email');
    
    if (email === storedEmail) {
      localStorage.setItem('is_logged_in', 'true');
      setIsLoggedIn(true);
      setCurrentUser({
        name: localStorage.getItem('user_name'),
        email: storedEmail
      });
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    localStorage.setItem('is_logged_in', 'false');
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  // Register function
  const register = (userData) => {
    localStorage.setItem('user_name', userData.fullName);
    localStorage.setItem('user_email', userData.email);
    localStorage.setItem('is_registered', 'true');
    return true;
  };

  // Reset password function
  const resetPassword = (email) => {
    return email === localStorage.getItem('user_email');
  };

  const value = {
    currentUser,
    isLoggedIn,
    login,
    logout,
    register,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;