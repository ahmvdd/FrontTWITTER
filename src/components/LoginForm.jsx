import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate
import { loginUser } from '../auth';
import '../ss.css'; 

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialisez useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = {Email: email, password };

        try {
            const userData = await loginUser(loginData);
            console.log("Utilisateur connecté :", userData);
           
            navigate('/welcomePage');
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default LoginForm;