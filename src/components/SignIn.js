// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignIn = ({ setUser }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     const storedUser = localStorage.getItem('user');
//     const storedPassword = localStorage.getItem('password');

//     if (username === storedUser && password === storedPassword) {
//       setUser(username);
//       navigate('/');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Sign In</h2>
//       {error && <p style={styles.error}>{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         style={styles.input}
//       />
//       <button onClick={handleSignIn} style={styles.button}>
//         Sign In
//       </button>
//       <p>
//         Forgot password? <a href="#">Click here</a>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//   },
//   input: {
//     padding: '10px',
//     marginBottom: '20px',
//     width: '300px',
//   },
//   error: {
//     color: 'red',
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//   },
// };

// export default SignIn;



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
    <div className="signin-container">
      <h2>Sign In</h2>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignIn;
