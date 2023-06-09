import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Allbook.css';
import '../style/User.css';
import SearchBar from '../components/SearchBar';
import biblio from '../public/biblio.jpg';
import Box from '../components/Box';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';
import Login from '../components/Login';
import LivreEmprunte from '../components/LivreEmprunte';

const baseURL = 'http://localhost:3036/Membre';

interface User {
  ID: number;
  Nom: string;
  Prenom: string;
  Telephone: string;
  Email: string;
  DateAdhesion: string;
  DateFinAdhesion: string;
  Password: string;
  Photo: string;
}

const UserPage = () => {
  const [userData, setUserData] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const userPageLink = `/membre/${userId}`;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<{ membre: User }>(`${baseURL}/${userId}`);
        setUserData(response.data.membre);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleLogin = (id: string) => {
    setIsLoggedIn(true);
    setUserId(parseInt(id, 10));
  };
  
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserData(undefined);
    localStorage.removeItem('userId');
  };
  

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar />
      <div className="Top">
        <div className="SearchBar-container">
          <SearchBar />
        </div>
        <img className="Top-img" src={biblio} alt="logo_etna_white" />
      </div>
      <div className="App">
        <div className="Box">
          <Box />
        </div>
        <div className="Coup-de-coeur">
          <div className="VerticalBar">|</div>
          <div className="Coup-de-coeur-container">
            <div className="Coup-de-coeur-text">
              <h2 className="Coup-de-coeur-desc">Votre compte</h2>
              <h1 className="Coup-de-coeur-title">Utilisateur</h1>
            </div>
          </div>
        </div>
        <div className='separator'></div>
        <div className="Profil">
          {userData && <UserCard user={userData} />}
        </div>
        <div className="Coup-de-coeur">
          <div className="VerticalBar">|</div>
          <div className="Coup-de-coeur-container">
            <div className="Coup-de-coeur-text">
              <h2 className="Coup-de-coeur-desc">Vos livres</h2>
              <h1 className="Coup-de-coeur-title">Empruntés</h1>
            </div>
          </div>
        </div>
        <LivreEmprunte userId={userId} />
        <div className='buttondecocontainer'>
        <button className='buttondeco' onClick={handleLogout}>Déconnexion</button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserPage;
