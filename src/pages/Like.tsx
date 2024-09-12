import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Like.css';
import Navbar from '../components/Navbar';

const Like: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'ilsMaiment' | 'jaime'>('ilsMaiment');
    const navigate = useNavigate();
  
    const socksWhoLiked = [
      { id: 1, sockName: 'Chaussette Rouge', sockSize: 'Taille 40', description: 'Chaussette confortable en coton.', imageUrl: '/images/red-sock.jpg' },
      { id: 2, sockName: 'Chaussette Bleue', sockSize: 'Taille 42', description: 'Chaussette sportive pour un meilleur maintien.', imageUrl: '/images/blue-sock.jpg' },
      { id: 3, sockName: 'Chaussette Verte', sockSize: 'Taille 38', description: 'Chaussette douce et écologique.', imageUrl: '/images/green-sock.jpg' },
    ];

    const socksThatILiked = [
      { id: 1, sockName: 'Chaussette R', sockSize: 'Taille 40', description: 'Chaussette confortable en coton.', imageUrl: '/images/red-sock.jpg' },
      { id: 2, sockName: 'Chaussette B', sockSize: 'Taille 42', description: 'Chaussette sportive pour un meilleur maintien.', imageUrl: '/images/blue-sock.jpg' },
      { id: 3, sockName: 'Chaussette V', sockSize: 'Taille 38', description: 'Chaussette douce et écologique.', imageUrl: '/images/green-sock.jpg' },
    ];
  
    const handleTabChange = (tab: 'ilsMaiment' | 'jaime') => {
      setActiveTab(tab);
    };
  
    const handleProfileClick = (id: number) => {
      navigate(`/sock/${id}`);
    };
  
    return (<>
      <div className="like">
        <h1>Sock's Mate</h1>
        
        <div className="tabs">
          <button className={activeTab === 'ilsMaiment' ? 'active' : ''} onClick={() => handleTabChange('ilsMaiment')}>
            Ils m'aiment
          </button>
          <button className={activeTab === 'jaime' ? 'active' : ''} onClick={() => handleTabChange('jaime')}>
            J'aime
          </button>
        </div>
  
        <div className="sock-list">
          {activeTab === 'ilsMaiment' && socksWhoLiked.map((sock) => (
            <div key={sock.id} className="sock-banner" onClick={() => handleProfileClick(sock.id)}>
              <div className="banner-info">
                <span>{sock.sockName}</span>
                <span>{sock.sockSize}</span>
              </div>
              <span className="view-profile">Découvrez son profil</span>
            </div>
          ))}
          {activeTab === 'jaime' && socksThatILiked.map((sock) => (
            <div key={sock.id} className="sock-banner" onClick={() => handleProfileClick(sock.id)}>
              <div className="banner-info">
                <span>{sock.sockName}</span>
                <span>{sock.sockSize}</span>
              </div>
              <span className="view-profile">Découvrez son profil</span>
            </div>
          ))}
        </div>
        
      </div>
      <Navbar />
      </>
    );
  };
  
  export default Like;
