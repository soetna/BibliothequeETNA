import React, { useState } from 'react';
import axios from 'axios';
import '../style/UserForm.css';

const baseURL = 'http://localhost:3036/Membre';

const UserForm = () => {
  const [user, setUser] = useState({
    Nom: '',
    Prenom: '',
    Adresse: '',
    Telephone: '',
    Email: '',
    DateAdhesion: '',
    DateFinAdhesion: '',
    Password: '',
    Photo: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(baseURL, user);
      console.log('New user created:', response.data);
      setUser({
        Nom: '',
        Prenom: '',
        Adresse: '',
        Telephone: '',
        Email: '',  
        DateAdhesion: '',
        DateFinAdhesion: '',
        Password: '',
        Photo: '',
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="UserForm">
      <h2>Ajouter un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input type="text" id="nom" name="Nom" value={user.Nom} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="prenom">Prénom:</label>
          <input type="text" id="prenom" name="Prenom" value={user.Prenom} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="adresse">Adresse:</label>
          <input type="text" id="adresse" name="Adresse" value={user.Adresse} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="telephone">Téléphone:</label>
          <input type="text" id="telephone" name="Telephone" value={user.Telephone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="Email" value={user.Email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="dateAdhesion">Date d'adhésion:</label>
          <input type="date" id="dateAdhesion" name="DateAdhesion" value={user.DateAdhesion} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="dateAdhesion">Date Fin d'adhésion:</label>
          <input type="date" id="dateFinAdhesion" name="DateFinAdhesion" value={user.DateFinAdhesion} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="Password" value={user.Password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input type="text" id="photo" name="Photo" value={user.Photo} onChange={handleChange} />
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default UserForm;
