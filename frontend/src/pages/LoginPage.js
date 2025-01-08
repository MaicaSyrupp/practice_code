import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure the URL is correct. Use /api/users/login instead of /login
            const response = await axios.post('https://practice-code-tan.vercel.app/api/users/login', formData);
            setMessage(`Login successful! Token: ${response.data.token}`);
        } catch (error) {
            // Improved error handling to capture both network issues and backend errors
            if (error.response) {
                // Request was made and the server responded with a status code that falls out of the range of 2xx
                setMessage(error.response?.data?.message || 'Invalid credentials');
            } else if (error.request) {
                // The request was made but no response was received
                setMessage('Network error. Please try again later.');
            } else {
                // Something else happened while setting up the request
                setMessage(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Log In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default LoginPage;
