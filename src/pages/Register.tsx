import React from 'react';
import '../styles/signupForm.css'; 
import '../styles/register.css';
import SignupForm from '../components/SignupForm';

const Register: React.FC = () =>{
    return(
        <div className="Container">
        <div className="Content">
            <h1 className="titleRegister">Sock's Mate</h1>
            <SignupForm />
        </div>
    </div>
    )
}
export default Register;