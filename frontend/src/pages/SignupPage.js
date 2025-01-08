import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData); // Log the form data to ensure it's being captured correctly
        try {
            // Check the backend request URL
            const response = await axios.post('https://practice-code-henna.vercel.app/api/users/signup', formData);
            console.log("Response: ", response.data); // Log the response from the server
            setMessage(response.data.message); // Display the response message
        } catch (error) {
            // Log the error response or message
            console.error("Error: ", error.response?.data || error.message);
            setMessage(error.response?.data?.message || 'Something went wrong');
        }
    };    

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default SignupPage;
