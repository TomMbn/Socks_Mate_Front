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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/feed');
    console.log('Form data:', formData);
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
      <button className="submitBtn" type="submit">
        Se connecter
      </button>
    </form>
  );
};

export default SignupForm;
