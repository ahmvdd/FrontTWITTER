import React from "react";
import "../styles/Sidebar.css"; // Assurez-vous d'importer le CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">Profil</li> {/* Exemple d'élément actif */}
        <li>Mes Tweets</li>
        <li>Messages</li>
        <li>Paramètres</li>
      </ul>
    </div>
  );
};

export default Sidebar;
