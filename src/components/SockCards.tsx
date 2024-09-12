import React, { useState, useEffect } from 'react';
import SockCard from './SockCard';
import { useSwipeable } from 'react-swipeable';
import '../styles/SockCards.css';

interface User {
  biography: string;
  _id: string;
  username: string;
  size: string;
  // Ajoute d'autres champs si nécessaire
}

const SockCards: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await fetch(`${import.meta.env.VITE_URI_API}/users`, {
          method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des utilisateurs');
        }
        const usersData = await response.json();
        setUsers(usersData);
      } catch (err) {
        console.error('Erreur lors du chargement des utilisateurs :', err);
        setError('Erreur lors du chargement des utilisateurs.');
      }
    };

    fetchUsers();
  }, []);

  const loggedInUserId = sessionStorage.getItem('userId') || '';
  
  return (
    <div className="userListContainer">
      {error && <p>{error}</p>}
      {users.length > 0 ? (
        <div className="sockCardsContainer">
          {users
            .filter(user => user._id !== loggedInUserId) // Exclure l'utilisateur connecté
            .map(user => (
              <SockCard
                key={user._id}
                sockName={user.username}
                sockSize={user.size}
                description={user.biography || ''} // Ajoute une valeur par défaut pour description
                imageUrl="" // Remplace par l'URL d'image si disponible
                userId={user._id}/>
            ))}
        </div>
      ) : (
        <p>Chargement des utilisateurs...</p>
      )}
    </div>
  );
};

export default SockCards;
