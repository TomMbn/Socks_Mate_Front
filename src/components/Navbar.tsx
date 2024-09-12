import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse as faHouseSolid, faHeart as faHeartSolid, faComment as faCommentSolid, faUser as faUserSolid } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const location = useLocation();  // Pour obtenir l'URL actuelle

  return (
    <div className="navbarContainer">
      {/* Onglet "feed" */}
      <Link to="/feed" className="navIcon">
        <FontAwesomeIcon icon={faHouseSolid} color={location.pathname === '/feed' ? "#92140C" : "#1E1E24"}/>
      </Link>

      {/* Onglet "like" */}
      <Link to="/like" className="navIcon">
        <FontAwesomeIcon icon={faHeartSolid} color={location.pathname === '/like' ? "#92140C" : "#1E1E24"}/>
      </Link>

      {/* Onglet "message" */}
      <Link to="/message" className="navIcon">
        <FontAwesomeIcon icon={faCommentSolid} color={location.pathname === '/message' ? "#92140C" : "#1E1E24"}/>
      </Link>

      {/* Onglet "profile" */}
      <Link to="/profile" className="navIcon">
        <FontAwesomeIcon icon={faUserSolid} color={location.pathname === '/profile' ? "#92140C" : "#1E1E24"}/>
      </Link>
    </div>
  );
};

export default Navbar;
