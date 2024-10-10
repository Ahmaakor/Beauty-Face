import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../styles/Authentication.css';
import logo from './20240925_183417.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Authentication = ({ setUser }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [animationDirection, setAnimationDirection] = useState('');

  const handleSignUpClick = () => {
    setAnimationDirection('slide-out-right');
    setTimeout(() => {
      setIsSignUp(true);
      setAnimationDirection('slide-in-left');
    }, 500); 
  };

  const handleSignInClick = () => {
    setAnimationDirection('slide-out-left');
    setTimeout(() => {
      setIsSignUp(false);
      setAnimationDirection('slide-in-right');
    }, 500);
  };

  return (
    <div className="auth">
      <div className="particle-display">
        <img src={logo} alt="Logo" className="displayLogo" />
      </div>
      <div className="auth-container">
        <div className={`auth-form-container ${animationDirection}`}>
          {isSignUp ? (
            <SignUp setIsSignUp={setIsSignUp} />
          ) : (
            <SignIn setUser={setUser} />
          )}
        </div>

        <div className="button-container">
          <button
            className={`toggle-btn ${isSignUp ? 'active' : ''}`}
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <button
            className={`toggle-btn ${!isSignUp ? 'active' : ''}`}
            onClick={handleSignInClick}
          >
            Log In
          </button>
        </div>
      </div>
      <a href="/" className="to-home-icon "><FontAwesomeIcon icon={faHome} className="home-icon" /></a>
    </div>
  );
};

export default Authentication;
