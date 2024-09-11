import React from 'react';
import { useParams } from 'react-router-dom';
import SockCard from './SockCard';
import Navbar from './Navbar';

const SockLikeCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const socksWhoLiked = [
    { id: 1, sockName: 'Chaussette Rouge', sockSize: 'Taille 40', description: 'Chaussette confortable en coton.', imageUrl: '' },
    { id: 2, sockName: 'Chaussette Bleue', sockSize: 'Taille 42', description: 'Chaussette sportive pour un meilleur maintien.', imageUrl: '' },
    { id: 3, sockName: 'Chaussette Verte', sockSize: 'Taille 38', description: 'Chaussette douce et écologique.', imageUrl: '' },
  ];


  const selectedSock = socksWhoLiked.find(sock => sock.id === parseInt(id || '', 10));

  if (!selectedSock) {
    return <div>Chaussette non trouvée.</div>;
  }

  return (
    <div>
      <h1>Sock's Mate</h1>
      <div className='container'>
      <SockCard 
        sockName={selectedSock.sockName}
        sockSize={selectedSock.sockSize}
        description={selectedSock.description}
        imageUrl={selectedSock.imageUrl}
      />
      </div>
      <Navbar />
    </div>
  );
};

export default SockLikeCard;
