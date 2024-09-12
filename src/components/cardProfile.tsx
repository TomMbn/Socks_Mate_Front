import React from "react";

import '../styles/cardProfile.css';


export interface CardProfileProps {
    sockName: string;
    size: number;
    biography: string;
    urlImage: string;
}

export const CardProfile: React.FC<CardProfileProps> = ({
    sockName, size, biography, urlImage
}) => {
    return (
        <div className="container">
            <div className="circle">
                <img src={urlImage} alt="" />
            </div>
            <div className="card-profil">
                <div className="flex-row">
                    <p>{sockName}</p>
                    <p>{size}</p>
                </div>
                <p>{biography}</p>

            </div>
        </div>
    )
}