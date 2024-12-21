import React, { useContext, useState, useEffect } from "react"; // Ajoutez useState et useEffect ici
import "../styles/Profile.css";
import Sidebar from "./Sidebar"; 
import { AuthContext } from "../index"; // Modifiez le chemin si nécessaire

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData)); // Récupérer depuis localStorage
    }
  }, []);
  if (!user) {
    return <div>Chargement des données utilisateur...</div>; // Message de chargement
  }
  console.log('chbsd:' ,user )

  return (
    <div className="container">
      <Sidebar />
      <div className="profile">
        <div className="profile-banner"></div>
        <div className="profile-avatar"></div>
        <div className="profile-info">
          <div className="profile-name">{user.user?.Name}</div>
          <div className="profile-username">{user.user?.Prenom}</div> 
        </div>
        <div className="tweets">
          {user?.tweets?.map((tweet) => (
            <div className="tweet" key={tweet.id}>
              <div className="tweet-header">
                <div className="tweet-avatar">il semble que vous n'avez rien poster !</div>
                <div>
                  <span className="tweet-user">{user.user?.Name}</span>
                  <span className="tweet-username">{user.user?.Prenom}</span> {/* Corrigé ici aussi */}
                </div>
              </div>
              <div className="tweet-text">{tweet.text}il semble que vous n'avez rien poster !</div>
              {tweet.imageUrl && (
                <img
                  className="tweet-image"
                  src={tweet.imageUrl}
                  alt="Tweet Image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
