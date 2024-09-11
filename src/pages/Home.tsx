import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  // pour ajouter des styles spécifiques si besoin

const Home: React.FC = () => {
  return (
    <div className="Container">
      <div className="homeContent">
        <h1 className="Title">Sock's Mate</h1>
        <div className="HomeLink">
          <Link to="/register" className="HomeBtn">Créer un compte</Link>
          <Link to="/login" className="HomeBtn">Connexion</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
