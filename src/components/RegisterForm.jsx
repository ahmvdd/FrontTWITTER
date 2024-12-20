import React, { useState } from 'react';
import { registerUser } from '../auth';  

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, email, password };

        try {
            const newUser = await registerUser(userData);
            console.log("Utilisateur enregistré :", newUser);
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Inscription</h2>
            <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">S'inscrire</button>
        </form>
    );
};

export default RegisterForm; // Assurez-vous que c'est un export par défaut
