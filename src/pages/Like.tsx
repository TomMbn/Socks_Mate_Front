import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Like.css';
import Navbar from '../components/Navbar';

const Like: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'ilsMaiment' | 'jaime'>('ilsMaiment');
    const [socksWhoLiked, setSocksWhoLiked] = useState<any[]>([]);
    const [socksThatILiked, setSocksThatILiked] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fonction pour récupérer les détails d'un utilisateur par ID
        const fetchUserById = async (userId: string) => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                throw new Error('Token manquant');
            }

            const response = await fetch(`${import.meta.env.VITE_URI_API}/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erreur lors de la récupération des données utilisateur');
            }
        };

        // Fonction pour récupérer les détails de l'utilisateur actuel
        const fetchCurrentUser = async () => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                throw new Error('Token manquant');
            }

            // On suppose que l'ID de l'utilisateur est stocké en sessionStorage
            const userId = sessionStorage.getItem('userId');
            if (!userId) {
                throw new Error('User ID manquant');
            }

            const response = await fetch(`${import.meta.env.VITE_URI_API}/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des détails de l\'utilisateur');
            }

            const user = await response.json();

            // Récupérer les utilisateurs qui t'ont aimé et ceux que tu as aimés
            const fetchLikesAndLiked = async () => {
                const { giveLikes, receiveLikes } = user;

                // Récupérer les utilisateurs qui t'ont aimé
                const usersWhoLiked = await Promise.all(receiveLikes.map(fetchUserById));
                setSocksWhoLiked(usersWhoLiked);

                // Récupérer les utilisateurs que tu as aimés
                const usersThatILiked = await Promise.all(giveLikes.map(fetchUserById));
                setSocksThatILiked(usersThatILiked);
            };

            await fetchLikesAndLiked();
        };

        fetchCurrentUser()
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
                setErrorMessage(error.message || 'Erreur lors de la récupération des données.');
            })
            .finally(() => setLoading(false));
    }, []); // Le tableau vide [] signifie que ce useEffect s'exécute une seule fois au montage

    const handleTabChange = (tab: 'ilsMaiment' | 'jaime') => {
        setActiveTab(tab);
    };

    const handleProfileClick = (id: string) => {
        navigate(`/sock/${id}`);
    };

    if (loading) return <div>Chargement...</div>;
    if (errorMessage) return <div>{errorMessage}</div>;

    return (
        <>
            <div className="like">
                <h1>Sock's Mate</h1>
                
                <div className="tabs">
                    <button
                        className={activeTab === 'ilsMaiment' ? 'active' : ''}
                        onClick={() => handleTabChange('ilsMaiment')}
                    >
                        Ils m'aiment
                    </button>
                    <button
                        className={activeTab === 'jaime' ? 'active' : ''}
                        onClick={() => handleTabChange('jaime')}
                    >
                        J'aime
                    </button>
                </div>

                <div className="sock-list">
                    {activeTab === 'ilsMaiment' && socksWhoLiked.map((sock) => (
                        <div key={sock._id} className="sock-banner" onClick={() => handleProfileClick(sock._id)}>
                            <div className="banner-info">
                                <span>{sock.username}</span>
                                <span>{sock.size}</span>
                            </div>
                            <span className="view-profile">Découvrez son profil</span>
                        </div>
                    ))}
                    {activeTab === 'jaime' && socksThatILiked.map((sock) => (
                        <div key={sock._id} className="sock-banner" onClick={() => handleProfileClick(sock._id)}>
                            <div className="banner-info">
                                <span>{sock.username}</span>
                                <span>{sock.size}</span>
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
