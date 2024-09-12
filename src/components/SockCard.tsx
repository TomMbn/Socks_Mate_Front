import React from "react";
import '../styles/SockCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


interface SockCardProps {
  sockName: string;
  sockSize: string;
  description: string;
  imageUrl: string;
}

const SockCard: React.FC<SockCardProps> = ({ sockName, sockSize, description, imageUrl }) => {
  return (
    <div className="card">
      <img className="sock-image" src={imageUrl} alt={sockName} />
      <div className="sock-info">
        <span>{sockName}</span>
        <span>{sockSize}</span>
      </div>
      <p className="description">{description}</p>
      <div className="footerCard">
        <span className="heart-icon"> <FontAwesomeIcon icon={faHeart} /></span>
        <button className="message-button">Message</button>
      </div>
    </div>
  );
};

export default SockCard;
