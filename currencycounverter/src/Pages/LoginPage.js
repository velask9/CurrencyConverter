import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data === "Success") {
          navigate('/currency-converter'); // Navigate to Currency Converter page
        } else if (result.data === "Password is incorrect") {
          console.log("Password is incorrect");
        } else if (result.data === "No record existed") {
          console.log("User not found");
        }
      })
      .catch(err => {
        console.log("An error occurred while logging in");
      });
  };

  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
