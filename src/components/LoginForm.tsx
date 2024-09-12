import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import '../styles/InputField.css';
import '../styles/TextAreaField.css';
import '../styles/signupForm.css';
import '../styles/ImportField.css';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    console.log(formData);
    try { 
      const response = await fetch(`${import.meta.env.VITE_URI_API}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log (response);
      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        navigate('/feed');
        
      } else {
        setErrorMessage(data.message || 'Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      setErrorMessage('Erreur serveur. Veuillez réessayer plus tard.');
    }
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <InputField
        label="Identifiant"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <InputField
        label="Mot de passe"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      
      {/* Affiche un message d'erreur si nécessaire */}
      {errorMessage && <p className="error">{errorMessage}</p>}

      <button className="submitBtn" type="submit">
        Se connecter
      </button>
    </form>
  );
};

export default SignupForm;
