import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import { loginUser } from '../auth';
import '../styles/Firstp.css';

function FirstP() {
  const [formType, setFormType] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleLoginClick = () => setFormType('login');
  const handleSignupClick = () => setFormType('signup');
  const handleCloseForm = () => setFormType(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { Email: email, password };

    try {
      const userData = await loginUser(loginData);
      console.log("Utilisateur connecté :", userData);
      navigate('/welcomePage');
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const renderForm = () => {
    if (formType === 'login') {
      return (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                required
              />
            </label>
            <label>
              Mot de passe:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                required
              />
            </label>
            <button type="submit">Se connecter</button>
            <button type="button" className="back" onClick={handleCloseForm}>
              Retour
            </button>
          </form>
        </div>
      );
    }

    if (formType === 'signup') {
      return (
        <div className="form-container">
          <form className="form">
            <h2>Inscription</h2>
            <label>
              Nom:
              <input type="text" placeholder="Entrez votre nom" required />
            </label>
            <label>
              Prénom:
              <input type="text" placeholder="Entrez votre prénom" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Entrez votre email" required />
            </label>
            <label>
              Mot de passe:
              <input type="password" placeholder="Créez un mot de passe" required />
            </label>
            <label>
              Confirmer le mot de passe:
              <input type="password" placeholder="Confirmez votre mot de passe" required />
            </label>
            <button type="submit">S'inscrire</button>
            <button type="button" className="back" onClick={handleCloseForm}>
              Retour
            </button>
          </form>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Suivez vos passions.</h2>
        <h2>Découvrez ce dont les gens parlent.</h2>
        <h2>Rejoignez la conversation.</h2>
      </div>
      <div className="right-panel">
        <img
          src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
          alt="Twitter Logo"
          className="logo"
        />
        <h1>Découvrez ce qui se passe dans le monde en temps réel</h1>
        <p>Rejoignez Chuchotis aujourd'hui.</p>
        <div className="buttons">
          <button className="signup" onClick={handleSignupClick}>
            S'inscrire
          </button>
          <button className="login" onClick={handleLoginClick}>
            Se connecter
          </button>
        </div>
      </div>
      {renderForm()}
    </div>
  );
}

export default FirstP;
