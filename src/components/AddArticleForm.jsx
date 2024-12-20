import React, { useState } from 'react';
import '../Formajouter.css';

const AddArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const articleData = { Title: title, Content: content };

        try {
            const response = await fetch('http://localhost:3000/article/ajouter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'), 
                },
                body: JSON.stringify(articleData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur lors de l\'ajout de l\'article.'); // Message d'erreur détaillé
            }

            const data = await response.json();
            setSuccess(data.message);
            setTitle(''); // Réinitialiser le titre
            setContent(''); // Réinitialiser le contenu
            setError(null); // Effacer les messages d'erreur
        } catch (err) {
            console.error(err);
            setError(err.message);
            setSuccess(null);
        }
    };

    return (
        <div>
            <h2>Ajouter un nouvel post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Contenu"
                    required
                />
                <button type="submit">Ajouter l'article</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddArticleForm;









// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const articleData = { Title: title, Content: content };

//     try {
//         const response = await fetch('http://localhost:3000/article/ajouter', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + localStorage.getItem('token'), // Vérifiez ici
//             },
//             body: JSON.stringify(articleData),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || 'Erreur lors de l\'ajout de l\'article.'); // Message d'erreur détaillé
//         }

//         const data = await response.json();
//         setSuccess(data.message);
//         setTitle(''); // Réinitialiser le titre
//         setContent(''); // Réinitialiser le contenu
//         setError(null); // Effacer les messages d'erreur
//     } catch (err) {
//         console.error(err);
//         setError(err.message);
//         setSuccess(null);
//     }
// };
