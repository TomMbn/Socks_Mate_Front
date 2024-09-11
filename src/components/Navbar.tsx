import React from "react";
import '../styles/Navbar.css';


//TODO : Changer les icones
const Navbar: React.FC = () => {
  return (
    <div className="navbarContainer">
      <div className="navIcon">🏠</div> 
      <div className="navIcon">❤️</div>
      <div className="navIcon">💬</div>
      <div className="navIcon">👤</div>
    </div>
  );
};

export default Navbar;
