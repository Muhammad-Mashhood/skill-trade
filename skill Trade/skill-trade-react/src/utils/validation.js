// This file contains utility functions for validating user input in forms.

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
};

export const validateUsername = (username) => {
    // Username must be at least 3 characters long and can contain letters, numbers, and underscores
    const regex = /^[a-zA-Z0-9_]{3,}$/;
    return regex.test(username);
};

export const validateRequiredField = (value) => {
    return value.trim() !== '';
};