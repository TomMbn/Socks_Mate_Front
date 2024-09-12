import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import ImportField from './ImportField';
import '../styles/InputField.css';
import '../styles/TextAreaField.css';
import '../styles/signupForm.css';
import '../styles/ImportField.css';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    description: '',
    picture: '',
    shoeSize: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // Pour afficher les erreurs
  const [isSubmitting, setIsSubmitting] = useState(false); // Empêcher la soumission multiple

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');  // Réinitialise le message d'erreur
    setIsSubmitting(true); // Empêche la soumission multiple

    try {
      // Prépare les données du formulaire
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key as keyof typeof formData]);
      });

      // Requête vers le backend pour l'inscription
      const response = await fetch(`${import.meta.env.VITE_URI_API}/addUser`, {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        // Inscription réussie, sauvegarde du token et redirection vers le feed
        localStorage.setItem('token', data.token); // Sauvegarde le token
        navigate('/feed'); // Redirige vers le feed
      } else {
        // En cas d'erreur, affiche un message d'erreur
        setErrorMessage(data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      setErrorMessage('Erreur serveur. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false); // Permet une nouvelle soumission
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
      <ImportField 
        label="Choisissez une photo"
        name="picture"
        type='file'
        onChange={(e) => {
        }}
      />
      <TextAreaField
        label="Parlez-nous de vous..."
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <InputField
        label="Votre pointure"
        name="shoeSize"
        value={formData.shoeSize}
        onChange={handleChange}
      />
      
      {/* Affiche un message d'erreur si nécessaire */}
      {errorMessage && <p className="error">{errorMessage}</p>}

      <button className="submitBtn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Création en cours...' : 'Créer mon compte'}
      </button>
    </form>
  );
};

export default SignupForm;
