import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


//TODO : Changer les icones
const Navbar: React.FC = () => {
  return (
    <div className="navbarContainer">
      <Link to="/feed" className="navIcon">🏠</Link> 
      <Link to="/like" className="navIcon">❤️</Link>
      <Link to="/message" className="navIcon">💬</Link>
      <Link to="/profile" className="navIcon">👤</Link>
    </div>
  );
};

export default Navbar;
