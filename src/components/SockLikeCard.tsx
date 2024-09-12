import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SockCard from './SockCard';
import Navbar from './Navbar';
import '../styles/SockLikeCard.css';

const SockLikeCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSock, setSelectedSock] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchSock = async () => {
      if (!id) {
        setErrorMessage('ID de chaussette manquant.');
        setLoading(false);
        return;
      }

      const token = sessionStorage.getItem('token');
      if (!token) {
        setErrorMessage('Token manquant.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const user = await response.json();
          // Supposons que les détails de la chaussette se trouvent dans l'objet utilisateur.
          setSelectedSock({
            sockName: user.sockName || 'Nom non disponible',
            sockSize: user.sockSize || 'Taille non disponible',
            description: user.description || 'Description non disponible',
            imageUrl: user.imageUrl || '', // Assure-toi que `imageUrl` existe dans la réponse.
          });
        } else {
          setErrorMessage('Erreur lors de la récupération des détails de la chaussette.');
        }
      } catch (error) {
        setErrorMessage('Erreur lors de la récupération des détails de la chaussette.');
      } finally {
        setLoading(false);
      }
    };

    fetchSock();
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (errorMessage) return <div>{errorMessage}</div>;
  if (!selectedSock) return <div>Chaussette non trouvée.</div>;

  return (
    <div className='LikeCardContainer'>
      <h1>Sock's Mate</h1>
      <div className='LikeCardContent'>
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
