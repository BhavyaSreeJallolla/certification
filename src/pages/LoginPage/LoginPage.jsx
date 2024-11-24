import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import './Login.css';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Use useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data); // Call the onLogin prop passed from App.jsx
        navigate('/events'); // Use navigate to redirect to the events page
      } else {
        setError(data.message); // Show error if login fails
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
  );
}

export default LoginPage;
