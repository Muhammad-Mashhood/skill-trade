import axios from 'axios';

const API_URL = 'https://api.skilltrade.com'; // Replace with your actual API URL

// Register a new user
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// Login a user
export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

// Logout a user
export const logout = () => {
    localStorage.removeItem('user');
};

// Reset password
export const resetPassword = async (email) => {
    const response = await axios.post(`${API_URL}/reset-password`, { email });
    return response.data;
};

// Get current user
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};