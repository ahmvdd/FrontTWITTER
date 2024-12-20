import React from "react";
import "../styles/Sidebar.css"; // Assurez-vous d'importer le CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
    <li className="active">
        <a href="/profile">Profil</a> {/* Exemple d'élément actif */}
    </li>
    <li>
        <a href="/welcomePage">Les Tweets</a>
    </li>
    <li>
        <a href="#">Paramètres ⚙️</a>
    </li>
    <li>
        <a href="/logout">Se déconnecter 💔</a>
    </li>
</ul>

    </div>
  );
};

export default Sidebar;
