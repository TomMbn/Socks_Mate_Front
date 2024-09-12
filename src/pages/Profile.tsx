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
                const response = await fetch('http://localhost:3000/users/66e295e7d432b18ff96bddc5', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmUyOTVlN2Q0MzJiMThmZjk2YmRkYzUiLCJpYXQiOjE3MjYxMjU1NDN9.IWRhQIAH_2Qxua7DQ07jv8RBxgHoZyX1wu5MygaAOb4',
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
