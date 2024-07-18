import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/login/', {
            username,
            password
          });
      
          localStorage.setItem('token', response.data.token);
          onLogin();
          navigate("/");
        } catch (error) {
          
            setError('Invalid username or password');

            console.error('Error:', error);
          }
        
      };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
