import React from "react";
import "../styles/Profile.css";
import Sidebar from "./Sidebar"; // Assurez-vous d'importer le Sidebar

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "@johndoe",
    tweets: [
      {
        id: 1,
        text: "This is my first tweet!",
        imageUrl: "https://via.placeholder.com/500",
      },
      {
        id: 2,
        text: "Just enjoying my day!",
      },
    ],
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="profile">
        <div className="profile-banner"></div>
        <div className="profile-avatar"></div>
        <div className="profile-info">
          <div className="profile-name">{user.name}</div>
          <div className="profile-username">{user.username}</div>
        </div>
        <div className="tweets">
          {user.tweets.map((tweet) => (
            <div className="tweet" key={tweet.id}>
              <div className="tweet-header">
                <div className="tweet-avatar"></div>
                <div>
                  <span className="tweet-user">{user.name}</span>
                  <span className="tweet-username">{user.username}</span>
                </div>
              </div>
              <div className="tweet-text">{tweet.text}</div>
              {tweet.imageUrl && (
                <img
                  className="tweet-image"
                  src={tweet.imageUrl}
                  alt="Tweet Image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
