import React, { useEffect, useState } from 'react';
import AddArticleForm from './AddArticleForm'; // Importez le formulaire d'ajout d'article
import '../WelcomePage.css';

const WelcomePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('http://localhost:3000/article'); // Remplacez par l'URL correcte de votre API
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des articles.');
                }
                const data = await response.json();
                setArticles(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <p>Chargement des articles...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <div className="sidebar">
                <h1>Logo</h1>
                <div className="menu">
                    <a href="/welcomePage" className="menu-item">Home</a>
                    <a href="/Profile" className="menu-item">Profile</a>

                    <a href="#" className="menu-item">deconection</a>
                    
                </div>
                <button className="tweet-button">Tweet</button>
            </div>

            <div className="main-content">
                <div className="header">
                    <h2>Home</h2>
                </div>
                <div className="tweet-box">
                    <input type="text" placeholder="What's happening?" />
                </div>
                <div className="tweets">
                    {articles.map((article) => (
                        <div className="tweet" key={article.Id_article}>
                            <h3>{article.Titre}</h3>
                            <p>{article.Contenu}</p>
                            <small>Publié le : {new Date(article.Date_publication).toLocaleDateString()}</small>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-sidebar">
                <div className="section">
                    <div className="section-title">What's happening</div>
                    <p>COVID-19: Updates on the latest measures.</p>
                    <p><a href="#">See more</a></p>
                </div>
                <div className="section">
                    <div className="section-title">Who to follow</div>
                    <p><a href="#">Bessie Cooper</a></p>
                    <p><a href="#">Jenny Wilson</a></p>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
