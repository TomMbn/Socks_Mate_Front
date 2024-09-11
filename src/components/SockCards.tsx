import React, { useState, useEffect } from 'react';
import SockCard from './SockCard';
import { useSwipeable } from 'react-swipeable';
import '../styles/SockCards.css';

interface Sock {
  id: number;
  name: string;
  size: string;
  description: string;
  imageUrl: string;
  userId: number;
}

const SockCards: React.FC<{ userId: number }> = ({ userId }) => {
  const [socks, setSocks] = useState<Sock[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`/socks?userId=${userId}`) //Remplacer par le bon URL pour récupérer les chaussettes
      .then((res) => res.json())
      .then((data) => setSocks(data))
      .catch((err) => console.error("Erreur lors du chargement des chaussettes :", err));
  }, [userId]);

  const handlers = useSwipeable({
    onSwipedUp: () => handleSwipe('up'),
    onSwipedDown: () => handleSwipe('down'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleSwipe = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      if (currentIndex < socks.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <div {...handlers} className="sockCardsContainer">
      {socks.length > 0 ? (
        <SockCard
          sockName={socks[currentIndex].name}
          sockSize={socks[currentIndex].size.toString()}
          description={socks[currentIndex].description}
          imageUrl={socks[currentIndex].imageUrl}
        />
      ) : (
        <p>Chargement des chaussettes...</p>
      )}
    </div>
  );
};

export default SockCards;
