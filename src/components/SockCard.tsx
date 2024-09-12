import React, { useState } from "react";
import '../styles/SockCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface SockCardProps {
  sockName: string;
  sockSize: string;
  description: string;
  imageUrl: string;
  userId: string; // Ajoute l'ID de l'utilisateur pour qui la carte est affichée
}

const SockCard: React.FC<SockCardProps> = ({ sockName, sockSize, description, imageUrl, userId }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_URI_API}/users/${userId}/like`, { // Assure-toi que l'URL est correcte
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du like');
      }
      const result = await response.json();
      console.log(result.message);
      setLiked(true); // Met à jour l'état pour refléter le like
    } catch (err) {
      console.error('Erreur lors de l\'ajout du like :', err);
    }
  };

  return (
    <div className="card">
      <img className="sock-image" src={imageUrl} alt={sockName} />
      <div className="sock-info">
        <span>{sockName}</span>
        <span>{sockSize}</span>
      </div>
      <p className="description">{description}</p>
      <div className="footerCard">
        <span 
          className={`heart-icon ${liked ? 'liked' : ''}`} 
          onClick={handleLike} 
          style={{ cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <button className="message-button">Message</button>
      </div>
    </div>
  );
};

export default SockCard;
