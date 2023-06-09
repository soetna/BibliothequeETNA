import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Alluser.css';
import biblio from '../public/biblio.jpg';

const baseURL = 'http://localhost:3036/Membre';

interface User {
  ID: number;
  Nom: string;
  Prenom: string;
  Adresse: string;
  Telephone: string;
  Email: string;
  DateAdhesion: string;
  DateFinAdhesion: string;
  Password: string;
  Photo: string;
  createdAt: string;
  updatedAt: string;
}

const Alluser = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(`${baseURL}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId: number) => {
    try {
      await axios.delete(`${baseURL}/${userId}`);
      setUsers(prevUsers => prevUsers.filter(user => user.ID !== userId));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    }
  };

  return (
    <div>
      {users.map((user) => (
        <div className='Alluser' key={user.ID}>
          {user.Photo && <img className="UserCard-photo" src={user.Photo} alt="Photo de profil" />}
          <h3 className="UserCard-name">{user.Nom} {user.Prenom}</h3>
          <h3 className="UserCard-info">Téléphone : {user.Telephone}</h3>
          <h3 className="UserCard-info">Email : {user.Email}</h3>
          <h3 className="UserCard-info">Date d'adhésion : {user.DateAdhesion}</h3>
          <h3 className="UserCard-info">Date de fin d'adhésion : {user.DateFinAdhesion}</h3>
          <button onClick={() => handleDeleteUser(user.ID)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default Alluser;
