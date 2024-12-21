import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import { loginUser, registerUser } from '../auth'; // Assurez-vous que registerUser est importé
import '../styles/Firstp.css';

function FirstP() {
  const [formType, setFormType] = useState(null);
  const [Name, setName] = useState(''); // Changement ici
  const [Prenom, setFirstName] = useState(''); // Changement ici
  const [Email, setEmail] = useState(''); // Changement ici
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleLoginClick = () => setFormType('login');
  const handleSignupClick = () => setFormType('signup');
  const handleCloseForm = () => setFormType(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { Email, password }; // Changement ici

    try {
      const userData = await loginUser(loginData);
      console.log("Utilisateur connecté :", userData);
      navigate('/welcomePage');
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      alert("Échec de la connexion. Veuillez vérifier vos identifiants.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs requis
    if (!Name || !Prenom || !Email || !password || !confirmPassword) {
      console.error("Tous les champs sont requis.");
      alert("Tous les champs sont requis.");
      return;
    }

    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const signupData = { Name, Prenom, Email, password }; // Changement ici

    try {
      const response = await registerUser(signupData);
      console.log("Utilisateur inscrit :", response);
      navigate('/welcomePage');
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.message);
      alert(error.message || "Une erreur s'est produite lors de l'inscription.");
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
                value={Email} // Changement ici
                onChange={(e) => setEmail(e.target.value)} // Changement ici
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
          <form className="form" onSubmit={handleSignupSubmit}>
            <h2>Inscription</h2>
            <label>
              Nom:
              <input
                type="text"
                value={Name} // Changement ici
                onChange={(e) => setName(e.target.value)} // Changement ici
                placeholder="Entrez votre nom"
                required
              />
            </label>
            <label>
              Prénom:
              <input
                type="text"
                value={Prenom} // Changement ici
                onChange={(e) => setFirstName(e.target.value)} // Changement ici
                placeholder="Entrez votre prénom"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={Email} // Changement ici
                onChange={(e) => setEmail(e.target.value)} // Changement ici
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
                placeholder="Créez un mot de passe"
                required
              />
            </label>
            <label>
              Confirmer le mot de passe:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmez votre mot de passe"
                required
              />
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
        <h2>Découvrez ce dont les gens parlent.</h2>
        <h2>Rejoignez la conversation.</h2>
      </div>
      <div className="right-panel">
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
