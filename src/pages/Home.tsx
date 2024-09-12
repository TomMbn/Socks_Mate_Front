import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/Home.css'; 

const Home: React.FC = () => {
  const navigate = useNavigate();

  const launchDemo = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URI_API}/users/demo`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Sauvegarder le token et l'ID dans le sessionStorage
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);

        // Rediriger vers le feed après avoir récupéré le token et l'id
        navigate('/feed'); // Appel à navigate pour rediriger
      } else {
        console.error('Erreur lors du lancement de la démo');
      }
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API pour la démo :', error);
    }
  };

  return (
    <div className="homeContainer">
      <div className="homeContent">
        <h1 className="Title">Sock's Mate</h1>
        <div className="HomeLink">
          <Link to="/register" className="HomeBtn">Créer un compte</Link>
          <Link to="/login" className="HomeBtn">Connexion</Link>
          <button className="HomeBtn" onClick={launchDemo}>Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
