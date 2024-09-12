import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import { CardProfile } from "../components/cardProfile";

interface GetUsers {
    username: string;
    biography: string;
    size: number;
    urlImage: string;
}

const Profile: React.FC = () => {
    const [data, setData] = useState<GetUsers | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const userId = sessionStorage.getItem('userId');
                const response = await fetch(`${import.meta.env.VITE_URI_API}/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError("Une erreur est survenue lors de la récupération des données.");
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return(
        <div className="Container">
            <h1 className="Title">Sock's Mate</h1>
            {data ? (
                <CardProfile
                    sockName={data.username}
                    biography={data.biography}
                    size={data.size}
                    urlImage={data.urlImage}
                />
            ) : (
                <p>Chargement des informations...</p>
            )}
            <a href="#">Modifier mon profil</a>
            <a href="#">Paramètres</a>
            <Navbar />
        </div>
    )
}

export default Profile;
