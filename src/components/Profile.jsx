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
          
            <div className="tweet" >
              <div className="tweet-header">
                <div className="tweet-avatar"></div>
                <div>
                  <span className="tweet-user">il semble que vous n'avez rien poster pour le moment !</span>
                  <span className="tweet-username"></span> 
                </div>
              </div>
              <div className="tweet-text">section en travaux🚧</div>
              
                
            
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
