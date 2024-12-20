// auth.js
const API_URL = 'http://localhost:3000';

export const loginUser = async (loginData) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erreur lors de la connexion.");
        }

        const data = await response.json();
        console.log("Réponse du serveur :", data); // Vérifiez ici

        // Stocker le token dans le localStorage
        localStorage.setItem('token', data.token); // Assurez-vous que le token est dans la réponse

        return data; // Retourner les données de l'utilisateur
    } catch (error) {
        console.error("Erreur lors de la connexion :", error.message);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erreur lors de l'inscription.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error.message);
        throw error;
    }
};
