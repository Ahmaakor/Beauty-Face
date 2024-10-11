import React, { useState } from 'react';
import '../styles/SignIn.css';

const SignUp = ({ setIsSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setError('Username is already taken.');
    } else {
      const newUser = { username, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setIsSignUp(false);
    }
  };

  return (
    <div className="signup-form">
      <h1>Join our community</h1>
      <div className="form-group">
        <label>Username</label>
        <input type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className="error">{error}</p>}
      <submit className="auth-btn" onClick={handleSignUp}>
        Sign up
      </submit>
    </div>
  );
};

export default SignUp;
