import React from 'react';
import '../styles/signupForm.css'; 
import '../styles/login.css';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="Container">
        <div className="loginContent">
            <h1 className="Title">Sock's Mate</h1>
            <LoginForm />
        </div>
    </div>
  );
};
export default Login;