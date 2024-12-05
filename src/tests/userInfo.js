import React from 'react';
import { useUser } from "./userContext.js";

const UserInfo = () => {
  const { user, loginUser, logoutUser } = useUser();

  const handleLogin = () => {
    const userData = { username: 'exampleUser', email: 'user@example.com' };
    loginUser(userData);
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Utilisateur connecté: {user.username}</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <p>Aucun utilisateur connecté</p>
          <button onClick={handleLogin}>Connexion</button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;