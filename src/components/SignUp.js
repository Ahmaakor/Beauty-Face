// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import emailjs from 'emailjs-com'; // Import EmailJS

// const SignUp = ({ setUser }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rePassword, setRePassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = () => {
//     if (password !== rePassword) {
//       setError("Passwords don't match");
//       return;
//     }

//     localStorage.setItem('user', username);
//     localStorage.setItem('email', email);
//     setUser(username);
//     sendEmail(email); // Send real email
//     navigate('/');
//   };

//   const sendEmail = (userEmail) => {
//     const templateParams = {
//       to_email: userEmail,
//       to_name: username,
//     };

//     emailjs
//       .send('service_pk7rr4x', 'template_1vhzaea', templateParams, '-wTVOil31jQM0_gWn')
//       .then((result) => {
//         console.log('Email sent successfully:', result.text);
//         alert('Thank you for joining us! A confirmation email has been sent.');
//       })
//       .catch((error) => {
//         console.log('Email sending failed:', error.text);
//       });
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Sign Up</h2>
//       {error && <p style={styles.error}>{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="password"
//         placeholder="Re-enter Password"
//         value={rePassword}
//         onChange={(e) => setRePassword(e.target.value)}
//         style={styles.input}
//       />
//       <button onClick={handleSignUp} style={styles.button}>
//         Sign Up
//       </button>
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

// export default SignUp;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      navigate('/signin');
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;

