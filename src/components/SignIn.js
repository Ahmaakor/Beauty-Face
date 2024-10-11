import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = registeredUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('user', username);
      setUser(username);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="signin-form">
      <h1>Welcome back</h1>
      <div className="form-group">
        <label>Username</label>
        <input type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className="error">{error}</p>}
      <button className="auth-btn" onClick={handleSignIn}>
        Log in
      </button>
    </div>
  );
};

export default SignIn;
